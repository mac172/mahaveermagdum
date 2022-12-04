<script>
  import C from '$lib/components/C.svelte'

export let data
</script>

<svelte:head>
  <title>Blogs - C Programming Language</title>
</svelte:head>

<C />

<hr class="w-full m-2 p-b-2 ">

<h1 class="flex justify-center text-2xl">Blogs on C Programming</h1>


{#each data.posts as post}
  {#if post.meta.recent && !post.meta.draft}
    <li class="p-5 m-4 rounded-2xl">
      <h2 class="text-rose-500 text-center md:text-3xl">
        <a href={post.path}>{post.meta.title}</a>
      </h2>
      <br />
      <p class="text-gray-500 text-center">{post.meta.date}</p>
    </li>
  {/if}
{/each}

<style>

  li {
    border: 1px solid #fd6b85;
  }

</style>
