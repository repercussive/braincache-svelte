<script lang="ts">
  import appScreen, { AppScreen } from '$logic/app/appScreen'
  import WelcomeScreen from '$components/screens/WelcomeScreen.svelte'
  import GameScreen from '$components/screens/GameScreen.svelte'
  import EndScreen from '$components/screens/EndScreen.svelte'

  $: component = getScreen($appScreen)

  function getScreen(screen: AppScreen) {
    switch (screen) {
      case 'welcome':
        return WelcomeScreen
      case 'game':
        return GameScreen
      case 'game-end':
        return EndScreen
    }
  }
</script>

<svelte:component this={component} />
