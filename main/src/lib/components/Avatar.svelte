<script>
  const { src, alt, ...rest } = $props();
</script>

<div {...rest} class="rounded-full overflow-hidden shadow-xl ring-4 ring-white {rest.class || ''}">
  <img {src} {alt} class="w-full h-full object-cover" />
</div>
