<script>
  import site from "$lib/constants";
</script>

<header>
  <nav>
    <a href="/">
      <div class="logo">
        <h1>{site.title}</h1>
      </div>
    </a>
    <ul>
      {#each site.menus as menu}
        <li><a href={menu.url}>{menu.name}</a></li>
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
  }
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    nav {
      display: block;
    }
    li {
      margin-left: 0;
      margin-right: 1rem;
    }
  }
</style>
