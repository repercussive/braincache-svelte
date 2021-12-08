<script>
  import Flex from '$components/modular/Flex.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
</script>

<Flex center column>
  <span class="emoji">🧠</span>
  <Spacer mb={1} />
  <h1>brain<span>cache</span></h1>
</Flex>

<style lang="scss">
  .emoji {
    font-size: 1.5rem;
  }

  h1 > span {
    color: var(--color-logo-accent);
  }
</style>
