<script>
  import Welcome from '$lib/components/Welcome.svelte'
  let a = 56;
  let b =23;
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="keywords" content="C, Python">
  <meta name="description" content="Free tutorial on Programming languages, Basic Programming, Python Programming, C Programming">
</svelte:head>


<Welcome home={true}/>

<hr />
<br />

<h1>{a,b}</h1>

<ul>
  <h1>Recent Uploads</h1>
  {#each data.posts as post}
    {#if post.meta.recent && !post.meta.draft}
      <li class="p-5 m-4">
        <h2 class="text-rose-500 text-center md:text-3xl">
          <a href={post.path}>{post.meta.title}</a>
        </h2>
        <br />
        <p class="text-gray-500 text-center">{post.meta.date}</p>
      </li>
    {/if}
  {/each}
</ul>


<style>
  ul {
    display: block;
    margin-right: 20px;

  }

  li {
    border: 1px solid #fd6b85;
    border-radius: 17px;
  }

</style>
