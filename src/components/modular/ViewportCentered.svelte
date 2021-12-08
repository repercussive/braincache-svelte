<script>
  import Flex from './Flex.svelte'
</script>

<div>
  <Flex center column>
    <slot />
  </Flex>
</div>

<style lang="scss">
  @use 'src/styles/util';

  div {
    position: absolute;
    top: 50%;
    right: var(--padding-page);
    left: var(--padding-page);
    transform: translateY(-50%);

    @media only screen and (min-width: #{util.$break-s}) {
      top: 40vh;
    }
  }
</style>
