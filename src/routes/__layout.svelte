<script>
  import "../../static/reset.css";
  import "../../static/atom-dark-syntax.css";
  import "../../static/global.css";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="wrapper">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  /* @media screen and (max-width: 600px) {} */
</style>
