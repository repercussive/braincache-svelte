<script lang="ts">
  import { SvelteComponent } from 'svelte'
  import appScreen, { AppScreen } from '$logic/app/appScreen'
  import WelcomeScreen from '$components/screens/WelcomeScreen.svelte'
  import GameScreen from '$components/screens/GameScreen.svelte'
  import EndScreen from '$components/screens/EndScreen.svelte'

  const componentMap: Record<AppScreen, typeof SvelteComponent> = {
    'welcome': WelcomeScreen,
    'game': GameScreen,
    'game-end': EndScreen,
  }

  $: component = componentMap[$appScreen]
</script>

<svelte:component this={component} />
