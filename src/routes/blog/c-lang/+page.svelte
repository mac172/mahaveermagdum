<script>
  //import C from '$lib/assets/logos/c-logo.svg'

export let data
</script>

<svelte:head>
  <title>Blogs</title>
</svelte:head>


<h1>Blogs on C Programming</h1>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href='{post.path}'>
          {post.meta.title}
        </a>
      </h2>
      <p>Published {post.meta.date}</p>
    </li>
  {/each}
</ul>


<style>

  li {
    box-shadow: 0 4px 8px 0 rgba(255,255,255,0.3);
    margin-bottom: 20px;
    border-radius: 14px;
    padding: 7px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    color: #fd6b85;
    font-family: monospace;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5px;
    font-size: 10px;
    font-family: sans-serif;
  }
</style>
