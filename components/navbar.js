function NavBar(){
    const Nav = document.createElement('div')
    Nav.classList.add('nav-box');
    Nav.innerHTML = `
        <nav class="top-nav">
          <button id="menuBtn"><img src="./assets/menu.png" alt="" /></button>
          <a href="#" id="logo">NewsAble</a>
          <div class="search-wrapper">
            <input type="search" />
            <button>🔍</button>
          </div>
          <!-- <div>mode</div> -->
        </nav>
        <hr>
        <nav class="heading-nav">
          <ul class="heading-ul">
            <li><a href="/">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Innovation</a></li>
            <li><a href="#">Culture</a></li>
            <li><a href="#">Art</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Earth</a></li>
          </ul>
        </nav>
    `
    return Nav
}

export default NavBar;