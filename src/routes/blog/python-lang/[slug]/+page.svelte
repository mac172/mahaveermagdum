<script>
  import Welcome from '$lib/components/Welcome.svelte';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BiTimeFive from "svelte-icons-pack/bi/BiTimeFive";
  export let data;
</script>

<svelte:head>
  <title>{ data.title }</title>
  <meta name="keywords" content="Python,Programming Language, Basic programming tutorial">
  <meta name="description" content={data.metad}>
</svelte:head>

<Welcome home={false} />

<br />

<article>
  <h1 class="text-5xl text-center">{ data.title }</h1>
  <p class="text-gray-600 m-2 p-2 text-center">Published: {data.date}</p>
  <div class="flex items-center justify-center">
    <Icon className="m-1 p-1" src={BiTimeFive} color="#7f00ff" size="2rem" />
    <p class="text-gray-600 m-1 p-1 md:text-center">{data.time}</p>
  </div>
  <br/>
  <hr/>
  <br/>
  <svelte:component this={data.content} class="text-2xl md:text-4xl"/>
</article>
