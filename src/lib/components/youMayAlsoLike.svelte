<script>
  export let name
  export let path
  export let date
</script>


<br />
<li>
  <h2 class="text-rose-500 text-center md:text-3xl">
    <a href={path}>{name}</a>
  </h2>
  <br />
  <p class="text-gray-500 text-center">{date}</p>
</li>


<style>
  ul {
    display: block;
    margin-right: 20px;

  }

  li {
    list-style-type: none;
    border: 1px solid #fd6b85;
    border-radius: 17px;
  }

</style>
