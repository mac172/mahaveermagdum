<script>
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/env';
  import { page } from '$app/stores';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }

  // Notice the import path. $lib is a handy alias that goes directly to src/lib, saving you from typing tedious relative paths. (You can customize this alias or add your own in jsconfig.jso)
//  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.css'
  import { fade } from 'svelte/transition';
  // import Footer from '$lib/components/Footer.svelte';
  import Navbar from '../lib/components/Navbar.svelte';

  export let data
</script>


<!-- 
  Remember: components related to routing (like pages, layouts, and endpoints) begin with a +. Normal, reusable components don’t, and are usually capitalized. (You can keep both in the routes folder, but often, it’s preferred to have reusable components in lib instead.)
-->

<Navbar />
{#key data.currentRoute}
<main in:fade={{duration: 300, delay: 150}} out:fade={{duration:300}}>
  <slot />
</main>

{/key}


