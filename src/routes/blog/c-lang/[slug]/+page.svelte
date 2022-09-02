<script>
  export let data;
</script>

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
