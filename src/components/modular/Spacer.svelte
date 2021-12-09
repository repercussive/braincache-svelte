<script lang="ts">
  export let mt = 0
  export let mr = 0
  export let mb = 0
  export let ml = 0

  const convert = (value: number) => `${value * 0.125}rem`

  let style = ''
  if (mt) style += `margin-top:${convert(mt)};`
  if (mr) style += `margin-right:${convert(mr)};`
  if (mb) style += `margin-bottom:${convert(mb)};`
  if (ml) style += `margin-left:${convert(ml)};`
</script>

<div {style}><slot /></div>