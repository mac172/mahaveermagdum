
<div class="ball2"></div>
<header>

  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
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

  header {
    margin-bottom: 20px;
    margin-left: 3px;
    background: rgba(156, 128, 185, 0.11);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.4px);
    -webkit-backdrop-filter: blur(2.4px);
    border: 1px solid rgba(156, 128, 185, 0.59);
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  li,a {
    text-decoration: none;
    list-style-type: none;
    color: white;
  }

  @media only screen and (min-width: 768px) {
    .ball2 {
      position: absolute;
      width: 300px;
      height: 230px;
      left: 37%;
    }
  }
</style>
