<script>
  import Welcome from '$lib/components/Welcome.svelte';

export let data
</script>

<svelte:head>
  <title>Blogs</title>
</svelte:head>

<Welcome home={false} />

<br />

<h1 class="text-5xl text-center m-2 p-2 text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-fuchsia-600">Blog</h1>

<br />
<hr/>
<br/>
  
<ul>
  {#each data.posts as post}
    <li class="p-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-2xl">
      <div class="p-2 bg-gray-900 rounded-2xl">
        <h2 class="text-purple-400 text-center md:text-3xl">
          <span></span><a href='{post.path}'>
            {post.meta.title}
          </a>
        </h2>
        <p class="text-gray-500 text-center">Published {post.meta.date}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  li {
    list-style-type: none;
    margin-bottom: 20px;
  }

</style>
