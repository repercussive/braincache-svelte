<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  export let icon: typeof SvelteComponent
  export let size = 1
  export let color = 'text'
  export let style = ''

  $: allStyles = `font-size: ${size}rem; color:var(--color-${color});` + style
</script>

<div style={allStyles}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
  >
    <svelte:component this={icon} />
  </svg>
</div>
