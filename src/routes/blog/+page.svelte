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
        <a href='{post.path}'>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>

<style>
  li {
    margin-bottom: 3px;
    border-bottom: 0.3px solid gray;
  }

  a {
    text-decoration: none;
  }
</style>
