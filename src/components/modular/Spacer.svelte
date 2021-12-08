<script lang="ts">
  export let mt = 0
  export let mr = 0
  export let mb = 0
  export let ml = 0

  const convert = (value: number) => `${value * 0.125}rem`

  const style = `
    --mt:${convert(mt)};
    --mr:${convert(mr)};
    --mb:${convert(mb)};
    --ml:${convert(ml)};
  `
</script>

<div {style}><slot /></div>

<style lang="scss">
  div {
    margin-top: var(--mt);
    margin-right: var(--mr);
    margin-bottom: var(--mb);
    margin-left: var(--ml);
  }
</style>
