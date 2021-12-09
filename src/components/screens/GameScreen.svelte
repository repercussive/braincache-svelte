<script lang="ts">
  import Score from '$components/screens/game/Score.svelte'
  import Lives from '$components/screens/game/Lives.svelte'
  import WordOptions from '$components/screens/game/WordOptions.svelte'
  import StatusText from '$components/screens/game/StatusText.svelte'
  import ViewportCentered from '$components/modular/ViewportCentered.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
  import FadeIn from '$components/modular/FadeIn.svelte'
</script>

<FadeIn>
  <ViewportCentered>
    <Score />
    <Spacer mb={12} />
    <Lives />
    <Spacer mb={8} />
    <WordOptions />
    <Spacer mb={12} />
    <StatusText />
  </ViewportCentered>
</FadeIn>
