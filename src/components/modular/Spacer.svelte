<script lang="ts">
  export let mt = 0
  export let mr = 0
  export let mb = 0
  export let ml = 0

  const convert = (value: number) => `${value * 0.125}rem`

  const style = `
    margin-top:${convert(mt)};
    margin-right:${convert(mr)};
    margin-bottom:${convert(mb)};
    margin-left:${convert(ml)};
  `
</script>

<div {style}><slot /></div>