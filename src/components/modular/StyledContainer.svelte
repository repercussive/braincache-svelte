<script>
  export let color = 'info'
  export let style = ''
  const allStyles = `--color:var(--color-${color});` + style
</script>

<div style={allStyles}>
  <slot />
</div>

<style lang="scss">
  @use 'src/styles/util';

  div {
    position: relative;
    border-radius: var(--radius-default);
    padding: 0.75em 1.25em;
    color: var(--color);
    &::before {
      @include util.default-pseudo;
      border: solid 2px var(--color);
      border-radius: inherit;
      opacity: 0.3;
    }
    &::after {
      @include util.default-pseudo;
      border-radius: inherit;
      background-color: var(--color);
      opacity: 0.08;
    }
  }
</style>
