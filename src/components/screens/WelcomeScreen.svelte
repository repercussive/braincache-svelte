<script>
  import screen from '$logic/app/appScreen'
  import highScoreHandler from '$logic/app/highScoreHandler'
  import ScoreDisplay from '$components/modular/ScoreDisplay.svelte'
  import StyledContainer from '$components/modular/StyledContainer.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
  import Button from '$components/modular/Button.svelte'
  import FadeIn from '$components/modular/FadeIn.svelte'
  import ViewportCentered from '$components/modular/ViewportCentered.svelte'
  import MainHeading from '$components/screens/welcome/MainHeading.svelte'
  import Rules from '$components/screens/welcome/Rules.svelte'
</script>

<FadeIn>
  <ViewportCentered>
    <MainHeading />
    <Spacer mb={8} />
    <StyledContainer>How many words can you hold in your head?</StyledContainer>
    <Spacer mb={8} />
    <ScoreDisplay label="Your best score:" score={highScoreHandler.highScore} />
    <Spacer mb={8} />
    <Rules />
    <Spacer mb={12} />
    <Button on:click={() => screen.set('game')}>Start</Button>
  </ViewportCentered>
</FadeIn>
