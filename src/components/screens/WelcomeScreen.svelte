<script>
  import ScoreDisplay from '$components/modular/ScoreDisplay.svelte'
  import StyledContainer from '$components/modular/StyledContainer.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
  import Button from '$components/modular/Button.svelte'
  import ViewportCentered from '$components/modular/ViewportCentered.svelte'
  import MainHeading from '$components/screens/welcome/MainHeading.svelte'
  import Rules from '$components/screens/welcome/Rules.svelte'
  import screen from '$logic/app/appScreen'

  let count = 0
</script>

<ViewportCentered>
  <MainHeading />
  <Spacer mb={8} />
  <StyledContainer>How many words can you hold in your head?</StyledContainer>
  <Spacer mb={8} />
  <ScoreDisplay label="Your best score:" score={-1} />
  <Spacer mb={8} />
  <Rules />
  <Spacer mb={12} />
  <Button on:click={() => screen.set('game')}>Start</Button>
</ViewportCentered>
