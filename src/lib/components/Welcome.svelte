
<h1 class="welcome">Welcome to amazing world of <span>Coding!</span></h1>

<div class="container">
  <p class="line1"><span class="def">def</span> <span class="main">main():</span>
  <p class="line2"><span class="print">print(</span><span class="msg">"Hello, World!"</span>)</p>
</div>


<style>
  .container {
    background: rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    box-shadow: 0 16px 30px rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 3px solid rgba(156, 128, 185, 0.89);
  }

  .line1 {
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    width: 100%;
    animation: typer 5s linear;
  }

  .line2 {
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    animation: typewriter 5s linear;
    margin-top: -40px;
    margin-left: 30px;
  }

  @keyframes typer {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }

  @keyframes typewriter {
    from{
      width: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }

  .def {
    color: #e06c75;
  }

  .msg {
    color: yellow;
  }
</style>
