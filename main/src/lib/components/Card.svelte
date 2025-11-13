<script>
  const { title, children, ...rest } = $props();
</script>

<div {...rest} class="bg-neutral-100 rounded-xl p-6 {rest.class || ''}">
  <h3 class="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
    {title}
  </h3>
  <p class="text-neutral-700 leading-relaxed">
    {@render children()}
  </p>
</div>
