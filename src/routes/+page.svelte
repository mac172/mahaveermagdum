<script>
  import Welcome from '$lib/components/Welcome.svelte'

  const category = [
    {name: "C", path: "/blog/c-lang/",desc: "Blogs on C Programming..."},
    {name: "Python", path: "/blog/python-lang",desc: "Blogs on Python Programming..."}
  ]
</script>

<svelte:head>
  <title>Home</title>
  <meta name="keywords" content="C, Python">
  <meta name="description" content="Free tutorial on Programming languages, Basic Programming, Python Programming, C Programming">
</svelte:head>


<Welcome />

<div class="ball1"></div>
<span class="ball2"></span>


<div>
  <ul>
    {#each category as cat}
      <li>
        <a href={cat.path}>{cat.name}</a>
        <p>{cat.desc}</p>
      </li>
    {/each}
  </ul>
</div>


<style>

  ul {
    display: block;
    margin-right: 20px;

  }

  li {
    list-style-type: none;
    width: 100%;
    height: 6rem;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 21px;
    background: rgba(156, 128, 185, 0.11);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.4px);
    -webkit-backdrop-filter: blur(2.4px);
    border: 1px solid rgba(156, 128, 185, 0.89);
  }

  a {
    text-decoration: none;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #CDD6F4;
    font-family: monospace;
  }

  p {
    display: inline-flex;
    text-align: center;
    font-family: monospace;
    overflow: hidden;
    width: 100%;
    color: #FFFCF9;
    margin-left: 20px;
    white-space: nowrap;
  }

  .ball2 {
    position: absolute;
    width: 223px;
    height: 150px;
    top: -8%;
    z-index: -1;
    left: 25%;
    background: #F4D35E;
    border-radius: 45% 14% 38% 31% / 19% 42% 41% 38% ;
  }


  @media only screen and (min-width: 768px) {
    .ball2 {
      position: absolute;
      width: 300px;
      height: 230px;
      left: 37%;
    }

    ul {
      margin-right: 15%;
    }

    p {
      margin-left: 33%;
      padding-right: -17%;
    }
  }
</style>
