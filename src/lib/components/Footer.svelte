<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import SiSvelte from "svelte-icons-pack/si/SiSvelte";
</script>


<div class="bg-gray-900 h-20 absolute -bottom-24 flex items-end relative rounded-t-2xl">
  <div class="flex items-end text-center ml-16">
    <h2 class="m-1 text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600">Made with </h2>
      <Icon className="text-white m-3" src={SiSvelte} color="#7f00ff" size="2rem" />
    <h2 class="m-1 text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600">& MDSvex</h2>
  </div>
</div>
