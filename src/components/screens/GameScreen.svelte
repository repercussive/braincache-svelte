<script lang="ts">
  import ViewportCentered from '$components/modular/ViewportCentered.svelte'
  import Score from '$components/screens/game/Score.svelte'
  import Lives from '$components/screens/game/Lives.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
  import WordOptions from '$components/screens/game/WordOptions.svelte'
  import StatusText from '$components/screens/game/StatusText.svelte'
</script>

<ViewportCentered>
  <Score />
  <Spacer mb={12} />
  <Lives />
  <Spacer mb={8} />
  <WordOptions />
  <Spacer mb={12} />
  <StatusText />
</ViewportCentered>
