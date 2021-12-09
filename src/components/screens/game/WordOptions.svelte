<script lang="ts">
  import { onMount } from 'svelte'
  import game from '$logic/app/game'
  import appScreen from '$logic/app/appScreen'
  import sleep from '$logic/util/sleep'
  import WordButton from '$components/screens/game/WordButton.svelte'
  import Flex from '$components/modular/Flex.svelte'
  import Spacer from '$components/modular/Spacer.svelte'

  let animation = 'enter' as 'enter' | 'exit'
  let lastSelectedWord = ''

  onMount(() => {
    if (!$game.levelData.correctOption) {
      game.generateLevel()
    }
  })

  $: wordsData = Array.from({ length: 3 }).map((_, index) => {
    const { options } = $game.levelData
    const word = index < options.length ? options[index] : ''
    const variant = getButtonVariant(word)

    return {
      word,
      variant,
    }
  })

  async function handleSubmitAnswer(answer: string) {
    game.submitAnswer(answer)
    lastSelectedWord = answer
    await sleep($game.status === 'incorrect-answer' ? 1600 : 750)
    animation = 'exit'
    await sleep(400)

    if (game.checkHasGameEnded()) {
      appScreen.set('game-end')
    } else {
      game.generateLevel()
      animation = 'enter'
    }
  }

  function getButtonVariant(word: string) {
    if (!word) return 'empty' as const

    const isCorrectAnswer = () => $game.levelData.correctOption === word

    if ($game.status === 'correct-answer' && isCorrectAnswer()) {
      return 'correct' as const
    }

    if ($game.status === 'incorrect-answer') {
      if (isCorrectAnswer()) {
        return 'missed' as const
      }
      if (word === lastSelectedWord) {
        return 'incorrect' as const
      }
    }
  }
</script>

<Flex center column>
  {#each wordsData as { word, variant }}
    <Spacer mb={4} />
    <WordButton on:click={() => handleSubmitAnswer(word)} {animation} {variant}>
      {word}
    </WordButton>
    <Spacer mb={4} />
  {/each}
</Flex>
