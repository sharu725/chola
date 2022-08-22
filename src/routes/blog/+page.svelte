<script>
  export let data;
  const { posts } = data;
</script>

<main>
  <article>
    <div class="article-list">
      {#each posts as { title, description, path }}
        <div>
          <a
            sveltekit:prefetch
            href={path.replace("../..", "").replace("+page.md", "")}
            ><h2>{title}</h2></a
          >
          <p>{description}</p>
        </div>
      {/each}
    </div>
  </article>
</main>

<svelte:head>
  <title>Blog | Chola</title>
  <meta
    name="description"
    content="Chola - A minimal Sveltekit theme or template which uses mdsvex. Suitable for text based websites and blogs."
  />
</svelte:head>

<style>
  h2:hover {
    color: var(--brand-color);
  }
</style>
