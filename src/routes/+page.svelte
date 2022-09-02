<script>
  const category = [
    {name: "C", path: "/blog/c-lang/",desc: "Blogs on C Programming..."},
    {name: "Python", path: "/blog/python-lang",desc: "Blogs on Python Programming..."}
  ]
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

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

  }

  li {
    /*box-shadow: 0 -8px -16px 0 rgba(255,255,255,0.5);*/
    width: 100%;
    height: 6rem;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 5px;
   /* border-radius: 14px;
    background: #0a143c;*/
    border-radius: 21px;
    background: rgba(0,0,0,0.74);
    box-shadow:  9px 9px 0px #05091c,
                 -9px -9px 0px #0f1f5c;
  }

  li,a {
    text-decoration: none;
    list-style-type: none;
  }

  a {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #CDD6F4;
    font-family: monospace;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
  }
</style>
