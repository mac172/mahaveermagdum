<script>
  export let name
  export let path
  export let date
</script>

<div class="container">
  <h1>You may also like...</h1>
  <div class="card">
    <h1><a href={path}>{name}</a></h1>
    <p>{date}</p>
  </div>
</div>


<style>
  .container {
    margin-top: 3rem;
  }

  .card {
    border: 2px solid lightcyan;
    border-radius: 14px;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    color: #fd6b85;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
</style>
