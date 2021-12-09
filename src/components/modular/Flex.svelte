<script lang="ts">
  export let align = 'flex-start' as
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
  export let justify = 'flex-start' as
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  export let column = false
  export let reverse = false
  export let center = false
  export let asSpan = false
  export let style = ''

  let direction = column ? 'column' : 'row'

  if (center) {
    align = 'center'
    justify = 'center'
  }

  if (reverse) {
    direction += '-reverse'
  }

  $: allStyles = `--direction:${direction};--align:${align};--justify:${justify};` + style
</script>

{#if asSpan}
  <span style={allStyles}><slot /></span>
{:else}
  <div style={allStyles}><slot /></div>
{/if}

<style lang="scss">
  div,
  span {
    display: flex;
    justify-content: var(--justify);
    align-items: var(--align);
    flex-direction: var(--direction);
  }
</style>
