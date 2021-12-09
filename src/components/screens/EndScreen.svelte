<script lang="ts">
  import appScreen, { AppScreen } from '$logic/app/appScreen'
  import highScoreHandler from '$logic/app/highScoreHandler'
  import game from '$logic/app/game'
  import ScoreDisplay from '$components/modular/ScoreDisplay.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
  import StyledContainer from '$components/modular/StyledContainer.svelte'
  import ViewportCentered from '$components/modular/ViewportCentered.svelte'
  import Button from '$components/modular/Button.svelte'

  const { mostRecentScore, highScore } = highScoreHandler
  const isHighScore = mostRecentScore >= highScore

  function handleChangeScreen(screen: AppScreen) {
    game.reset()
    appScreen.set(screen)
  }
</script>

<ViewportCentered>
  <span style="font-size: 1.5rem;">👏</span>
  <Spacer mb={8} />
  <StyledContainer color="text-accent">
    <p>That's a wrap!</p>
  </StyledContainer>
  <Spacer mb={12} />
  <ScoreDisplay
    label={isHighScore ? 'High score!' : 'Your score:'}
    score={mostRecentScore}
  />
  <Spacer mb={14} />
  <Button on:click={() => handleChangeScreen('game')}>Play again</Button>
  <Spacer mb={8} />
  <Button on:click={() => handleChangeScreen('welcome')}>Home</Button>
</ViewportCentered>
