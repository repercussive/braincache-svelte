<script>
  import HeartIcon from '$components/icons/HeartIcon.svelte'
  import Flex from '$components/modular/Flex.svelte'

  import Icon from '$components/modular/Icon.svelte'
  import game from '$logic/app/game'

  $: lives = Array.from({ length: 3 }).map((_, index) => {
    const isActive = $game.lives > index
    return {
      animation: isActive ? 'none' : 'lose-life forwards 400ms',
    }
  })
</script>

<Flex>
  {#each lives as { animation }}
    <div class="container">
      <Icon
        icon={HeartIcon}
        color="life"
        size={1.65}
        style={`position: absolute; animation:${animation};`}
      />
      <Icon
        icon={HeartIcon}
        color="life-used"
        size={1.65}
        style="position: relative; z-index: -1;"
      />
    </div>
  {/each}
</Flex>

<style lang="scss">
  @use 'src/styles/util';

  .container {
    position: relative;
    margin: 0 util.space(1);
  }
</style>
