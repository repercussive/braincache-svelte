<script>
  import { onMount } from 'svelte'
  import sleep from '$logic/util/sleep'

  export let time = 300
  export let delay = 0

  let opacity = 0

  onMount(() => {
    sleep(0).then(() => (opacity = 1))
  })
</script>

<div style={`opacity: ${opacity}; transition: opacity ${time}ms ${delay}ms;`}>
  <slot />
</div>

<style lang="scss">
  div {
    opacity: 0;
  }
</style>
