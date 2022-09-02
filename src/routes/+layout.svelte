<script>
  // Notice the import path. $lib is a handy alias that goes directly to src/lib, saving you from typing tedious relative paths. (You can customize this alias or add your own in jsconfig.jso)
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.css'
  import { fade } from 'svelte/transition'

  export let data
</script>

<!-- 
  Remember: components related to routing (like pages, layouts, and endpoints) begin with a +. Normal, reusable components don’t, and are usually capitalized. (You can keep both in the routes folder, but often, it’s preferred to have reusable components in lib instead.)
-->
<Header />

{#key data.currentRoute}
<main in:fade={{duration: 200, delay: 130}} out:fade={{duration:200}}>
  <slot />
</main>
{/key}
