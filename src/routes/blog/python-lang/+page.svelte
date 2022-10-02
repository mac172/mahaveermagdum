
<script>
  import Python from '$lib/components/Python.svelte'

export let data
</script>

<svelte:head>
  <title>Blogs - Python Programming Language</title>
</svelte:head>

<Python />

<h1>Blogs on Python Programming</h1>
  
<div>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      <p>Published {post.meta.date}</p>
    </li>
  {/each}
</div>


<style>
  li {
    margin-top: 2rem;
    list-style-type: none;
    border-bottom: 1.2px solid lightcyan;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    color: #fd6b85;
    font-family: monospace;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-family: sans-serif;
  }
</style>
