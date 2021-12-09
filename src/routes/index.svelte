<script lang="ts">
  import WelcomeScreen from '$components/screens/WelcomeScreen.svelte'
  import GameScreen from '$components/screens/GameScreen.svelte'
  import appScreen, { AppScreen } from '$logic/app/appScreen'

  $: component = getScreen($appScreen)

  function getScreen(screen: AppScreen) {
    switch (screen) {
      case 'welcome':
        return WelcomeScreen
      case 'game':
        return GameScreen
      default:
        return WelcomeScreen
    }
  }
</script>

<svelte:component this={component} />
