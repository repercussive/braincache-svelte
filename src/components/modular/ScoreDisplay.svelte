<script lang="ts">
  import Flex from '$components/modular/Flex.svelte'
  import Spacer from '$components/modular/Spacer.svelte'

  export let label: string
  export let score: number
</script>

<Flex asSpan center>
  <span>{label}</span>
  <Spacer mr={5} />
  <span class="score">{score}</span>
</Flex>

<style lang="scss">
  @use 'src/styles/util';

  .score {
    padding: util.space(5) util.space(8);
    background-color: var(--color-accent);
    border-radius: var(--radius-default);
  }
</style>