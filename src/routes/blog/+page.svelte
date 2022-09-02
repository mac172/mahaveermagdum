<script>
export let data
</script>

<svelte:head>
  <title>Blogs</title>
</svelte:head>

<h1>Blog</h1>
  
<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <span></span><a href='{post.path}'>
          {post.meta.title}
        </a>
      </h2>
      <p>Published {post.meta.date}</p>
    </li>
  {/each}
</ul>

<style>
  li {
    list-style-type: none;
    margin-bottom: 20px;
    border: 2px solid lightcyan;
    border-radius: 14px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fd6b85;
    font-family: monospace;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
</style>
