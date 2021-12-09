import { writable, get } from 'svelte/store'
import allWords from '$assets/words'
import getRandomArrayItem from '$logic/util/getRandomArrayItem'
import shuffleArray from '$logic/util/shuffleArray'

type GameState = { score: number, lives: number, levelData: LevelData, status: GameStatus }
type LevelData = { options: string[], correctOption: string }
export type GameStatus = 'waiting' | 'correct-answer' | 'incorrect-answer' | 'ended'

const getInitialState: () => GameState = () => ({
  score: 0,
  lives: 3,
  levelData: { options: [], correctOption: '' },
  status: 'waiting'
})

const gameState = writable<GameState>(getInitialState())
const { subscribe, set, update } = gameState

const createGame = () => {
  let unseenWords: string[], seenWords: string[]

  const initializeWords = () => {
    unseenWords = allWords
    seenWords = []
  }

  const pickRandomUnseenWord = () => {
    const newWord = getRandomArrayItem(unseenWords)
    unseenWords = unseenWords.filter((word) => word !== newWord)
    return newWord
  }

  const pickRandomSeenWords = () => {
    shuffleArray(seenWords)
    return seenWords.slice(0, Math.min(seenWords.length, 2))
  }

  const handleCorrectAnswer = () => update((game) => {
    game.status = 'correct-answer'
    game.score += 1
    return game
  })

  const handleIncorrectAnswer = () => update((game) => {
    game.status = 'incorrect-answer'
    game.lives -= 1
    return game
  })

  const handleGameEnd = () => update((game) => {
    game.status = 'ended'
    return game
  })

  const reset = () => {
    set(getInitialState())
    initializeWords()
  }

  initializeWords()

  return {
    subscribe, reset,

    generateLevel: () => {
      update((game) => {
        game.status = 'waiting'
        const correctOption = pickRandomUnseenWord()
        const incorrectOptions = pickRandomSeenWords()
        const options = [correctOption, ...incorrectOptions]
        shuffleArray(options)

        seenWords.push(correctOption)
        game.levelData = { options, correctOption }

        return game
      })

      return get(gameState).levelData
    },

    submitAnswer: (answer: string) => {
      const correctAnswer = get(gameState).levelData.correctOption
      const isCorrect = answer === correctAnswer

      if (isCorrect) {
        handleCorrectAnswer()
      } else {
        handleIncorrectAnswer()
      }
    },

    checkHasGameEnded: () => {
      const { lives } = get(gameState)
      if (lives === 0 || unseenWords.length === 0) {
        handleGameEnd()
        return true
      }
      return false
    }
  }
}

export default createGame()