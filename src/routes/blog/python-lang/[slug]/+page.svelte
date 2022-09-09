<script>
  export let data;
</script>

<svelte:head>
  <title>{ data.title }</title>
  <meta name="keywords" content="Python,Programming Language, Basic programming tutorial">
  <meta name="description" content={data.metad}>
</svelte:head>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
