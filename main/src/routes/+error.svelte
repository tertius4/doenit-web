<script>
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>Oops! Page Not Found - Tertius</title>
  <link rel="icon" href="/page-not-found.webp" />
</svelte:head>

<main class="h-dvh bg-linear-to-br from-neutral-50 to-neutral-200 flex items-center justify-center">
  <div class="max-w-md mx-auto text-center px-6">
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-neutral-400 mb-4">{page.status || "404"}</h1>
      <h2 class="text-2xl font-semibold text-neutral-900 mb-4">
        {#if page.status === 404}
          Page Not Found
        {:else}
          Something went wrong
        {/if}
      </h2>
      <p class="text-neutral-600 mb-8">
        {#if page.status === 404}
          The page you're looking for doesn't exist or has been moved.
        {:else}
          {page.error?.message || "An unexpected error occurred."}
        {/if}
      </p>
    </div>

    <div class="space-y-4">
      <a
        href="/"
        class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        ← Back to Home
      </a>

      <div class="text-sm text-neutral-500">or contact me if you think this is an error</div>
    </div>
  </div>
</main>
