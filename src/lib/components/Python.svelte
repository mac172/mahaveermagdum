<script>
  import logo from '$lib/assets/logos/python-logo.svg'

</script>

<div><img src={logo} alt="Python logo"></div>

<p class="desc"><span class="python">Python</span> is general purpose, high level programming language. Having easy to read syntax and Object-Oriented programming.</p>

<br>

<p>So let's start with following below blogs!</p>

<br>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  img {
    transition: 0.3s ease-in-out;
    animation: gradient 10s ease-in-out infinite;
  }

  @keyframes gradient {
    0% {
      filter: drop-shadow(20px 10px 3px rgba(152,0,255,0.43));
    }
    50% {
      filter: drop-shadow(20px 10px 3px rgba(0,181,212,0.43));
    }
    100% {
      filter: drop-shadow(20px 10pxpx 3px rgba(238,130,238,0.4));
    }
  }

  .desc {
    padding: 10px;
    box-shadow: 10px 12px 14px 0 rgba(0,0,0,1.2);
    border-radius: 14px;
    background: rgba(156, 128, 185, 0.46);
    backdrop-filter: blur(1.2px);
    -webkit-backdrop-filter: blur(1.2px);
    border: 1px solid rgba(156, 128, 185, 0.89);
  }

  .python {
    font-weight: bold;
    font-style: italic;
  }
</style>
