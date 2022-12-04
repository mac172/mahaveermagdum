<script>
  export let home;
  const name = "Mahaveer Magdum";

  // img = class={utilStyles.borderCircle}
  // h: = class={utilStyles.heading2Xl}
</script> 



{#if home}
  <div class="mt-12 mb-13 mx-auto py-12 px-0 max-w-3xl">
    <header class="flex flex-col items-center">
      <img
        src= "/profile.jpg"
        class="rounded-full m-4 hover:w-56"
        height={192}
        width={192}
        alt="mac"
        />
        <h1 class="my-4 mx-0 text-4xl font-extrabold  md:text-5xl text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600" >{name}</h1>
        <section class="text-lg mt-8 p-4 md:text-4xl md:p-8">
          <p>Hello, i'm <span class='text-rose-500'>Mahaveer Magdum</span>, a web developer, a programmer. i like to build website using modern frameworks like nextjs, svelte, nuxt, etc... and also have interest in quantum computer, space research. i write blogs on these and similar topics.</p>
        </section>
    </header>
  </div>
    {:else}
    <header class="mt-20 flex flex-col items-center">
      <img
        src= "/profile.jpg"
        class="rounded-full m-4 hover:w-56"
        height={110}
        width={110}
        alt="mac"
        />
        <a href="/"><h1 class="my-4 mx-0 text-4xl font-extrabold  md:text-5xl text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600" >{name}</h1></a>
    </header>
{/if}


