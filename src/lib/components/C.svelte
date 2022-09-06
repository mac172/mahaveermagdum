<script>
  import logo from '$lib/assets/logos/c-logo.svg'
</script>

<div><img src={logo} alt="C logo"></div>

<p class="desc">C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie. It is widely used all over the world, and thats why it is still dominating programming world.</p>

<p>Main feature <strong>'C'</strong> offer is it's speed. It is one of the fastest programming language. There is also more feature 'C' offer.</p>

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
    width: 90%;
    height: 90%;
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
</style>
