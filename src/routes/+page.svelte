<script>
  const category = [
    {name: "C", path: "/blog/c-lang/",desc: "Blogs on C Programming..."},
    {name: "Python", path: "/blog/python-lang",desc: "Blogs on Python Programming..."}
  ]
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>


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
    /*box-shadow: 0 -8px -16px 0 rgba(255,255,255,0.5);*/
    width: 100%;
    height: 6rem;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 5px;
   /* border-radius: 14px;
    background: #0a143c;*/
    border-radius: 21px;
    background: rgba(156, 128, 185, 0.11);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.4px);
    -webkit-backdrop-filter: blur(2.4px);
    border: 1px solid rgba(156, 128, 185, 0.89);
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
    display: inline-flex;
    text-align: center;
    font-family: monospace;
    overflow: hidden;
    width: 0%;
    color: #FFFCF9;
    margin-left: 20px;
    white-space: nowrap;
    animation: typewriter 4s linear infinite alternate;
  }

  @keyframes typewriter {

    90%,100%{width:100%;}
  }

  .ball1 {
    position: absolute;
    background: #FC6076;
    width: 200px;
    height: 300px;
    color: #44436A;
    top: 50%;
    left: -30%; 
    border-radius: 30% 70% 70% 30% / 31% 30% 70% 69%;
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

    .ball1 {
      position: absolute;
      width: 580px;
      height: 570px;
      left: -18%;
      top: 30%;
      animation: fader 4s linear infinite alternate;
    }

    ul {
      margin-right: 15%;
    }

    p {
      margin-left: 33%;
      padding-right: -17%;
    }

    @keyframes fader {
      0% {opacity: 10%;}
      100% {opacity: 100%}
    }
  }
</style>
