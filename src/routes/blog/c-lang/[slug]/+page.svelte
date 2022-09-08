<script>

  export let data

</script>

<svelte:head>
  <title>Blogs - { data.title }</title>
  <meta name="keywords" content="C, Basic programming tutorial">
  <meta name="description" content={data.metad}>
</svelte:head>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>

<style>
  p {
    padding-bottom: 8px;
    border-bottom: 0.4px solid grey;
    font-size: 12px;
  }
</style>
