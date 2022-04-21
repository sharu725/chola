<script>
  import site from "$lib/constants";
  import { page } from "$app/stores";
  $: currentPage = $page.url.pathname;
</script>

<header>
  <nav>
    <a class="logo" href="/">
      <h1>{site.title}</h1>
    </a>
    <ul>
      {#each site.menus as { url, name }}
        <li>
          <a
            sveltekit:prefetch={url.match("http") ? null : true}
            class:active={url !== "/"
              ? currentPage.match(url)
              : url === currentPage}
            href={url}>{name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    margin-bottom: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
  }
  nav,
  ul {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
  }
  ul {
    margin-left: auto;
  }
  li {
    margin-left: 1.5rem;
    list-style: none;
  }
  h1 {
    font-size: 2.25rem;
    font-weight: bold;
    margin: 0;
    transition-duration: var(--duration-100);
  }
  h1:hover,
  a.active {
    color: var(--brand-color);
  }
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    nav {
      display: block;
    }
    ul {
      margin-bottom: 0;
    }
    li {
      margin: 0 1rem 1rem 0;
    }
  }
</style>
