const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path
            d="M22.2064 10.1687L12.8314 0.793739C12.653 0.623038 12.4428 0.489228 12.2126 0.399989C11.7561 0.212455 11.2441 0.212455 10.7876 0.399989C10.5574 0.489228 10.3472 0.623038 10.1689 0.793739L0.793854 10.1687C0.619031 10.3436 0.480355 10.5511 0.385742 10.7795C0.291129 11.0079 0.242432 11.2528 0.242432 11.5C0.242432 11.9993 0.440784 12.4782 0.793854 12.8312C1.14692 13.1843 1.62579 13.3827 2.1251 13.3827C2.62442 13.3827 3.10328 13.1843 3.45635 12.8312L9.6251 6.64374V20.875C9.6251 21.3723 9.82265 21.8492 10.1743 22.2008C10.5259 22.5524 11.0028 22.75 11.5001 22.75C11.9974 22.75 12.4743 22.5524 12.8259 22.2008C13.1776 21.8492 13.3751 21.3723 13.3751 20.875V6.64374L19.5439 12.8312C19.7182 13.007 19.9255 13.1465 20.154 13.2417C20.3825 13.3369 20.6276 13.3859 20.8751 13.3859C21.1226 13.3859 21.3677 13.3369 21.5962 13.2417C21.8247 13.1465 22.032 13.007 22.2064 12.8312C22.3821 12.6569 22.5216 12.4496 22.6168 12.2211C22.712 11.9926 22.761 11.7475 22.761 11.5C22.761 11.2525 22.712 11.0074 22.6168 10.7789C22.5216 10.5504 22.3821 10.343 22.2064 10.1687Z"
            fill="black" />
        </svg>
        `;
class GoToTopButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    // this.classList.add('go-to-top-button');
    const style = document.createElement("style");
    style.textContent = `
            @keyframes springAnim{
                0%{transform:scale(0)}
                30%{transform:scale(1.8)}
                50%{transform:scale(.9)}
                100%{transform:scale(1)}
            }
            
            :host{
                --button-size: 60px;
                display: none;
                position: fixed;
                bottom: 100px;
                right:5dvw;
                z-index: 1000;
                // padding: 50px;
                width: var(--button-size);
                height: var(--button-size);
                align-items: center;
                justify-content: center;
                // transform-origin: 50% 50%;
                border-radius: 50%;
                background-color: rgb(255, 255, 255);
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                transition: scale 0.2s ease-in-out;
            }
            :host(.spring-anim-class){
                display:flex;
                animation:springAnim .6s forwards;
            }
            :host(:hover){cursor:pointer; scale: 1.4;}
            @media print{&:host{display:none;}}
        `;
    this.href = "#";
    const svgElem = document.createElement("template");
    svgElem.innerHTML = svg;
    shadow.appendChild(svgElem.content.cloneNode(true));
    shadow.appendChild(style);
  }
  connectedCallback() {
    this.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", () => {
      this.classList.toggle("spring-anim-class", window.scrollY > 200);
    });
  }
}
const hamburgerMenuElem = `<button id="hamburger-button">
<svg  width="100%" height="100%" viewBox="0 0 242 181" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="hamburger"><path d="M241.667,20.885c-0,11.526 -9.358,20.885 -20.885,20.885l-199.897,-0c-11.527,-0 -20.885,-9.359 -20.885,-20.885c0,-11.527 9.358,-20.885 20.885,-20.885l199.897,0c11.527,0 20.885,9.358 20.885,20.885Z" style="fill:currentColor;"/><path d="M241.667,90.306c-0,11.527 -9.358,20.885 -20.885,20.885l-199.897,-0c-11.527,-0 -20.885,-9.358 -20.885,-20.885c0,-11.527 9.358,-20.885 20.885,-20.885l199.897,0c11.527,0 20.885,9.358 20.885,20.885Z" style="fill:currentColor;"/><path d="M241.667,159.727c-0,11.527 -9.358,20.885 -20.885,20.885l-199.897,-0c-11.527,-0 -20.885,-9.358 -20.885,-20.885c0,-11.527 9.358,-20.885 20.885,-20.885l199.897,0c11.527,0 20.885,9.358 20.885,20.885Z" style="fill:currentColor;"/></g></svg>
</button>`;

const navMobileMenu = document.querySelector("mobile-menu");
class HamburgerMenuButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    const hamBurgerButtonTemplate = document.createElement("template");
    hamBurgerButtonTemplate.innerHTML = hamburgerMenuElem;
    style.textContent = `

      // :host{
      //   display: flex;
      //   margin-left: auto;
      // }
      #hamburger-button{    
        --max-button-size: 60px;
        display: flex;
        margin-left: auto;
        margin-right: 5%;
        position: relative;
        max-height: var(--max-button-size);
        max-width: var(--max-button-size);
        border: none;
        background-color: transparent;
        padding: 10px;
        
        transition: background-color 0.3s ease;
        &:hover{
            cursor: pointer;
            color: white;
            background-color: #111111;
        }
          @media only screen and (width > 850px){                  
            display: none;   
            --mobile-menu-is-open: "false";                   
          }
      }`;
    this.mobileMenu = document.querySelector("hamburger-menu-button");
    shadow.appendChild(hamBurgerButtonTemplate.content.cloneNode(true));
    shadow.appendChild(style);
    this.addEventListener("click", () => {
      console.log(navMobileMenu);
      navMobileMenu.setAttribute("data-open", "true");
    });
  }
}

const mobileMenuHTML = `
<div class="nav-mobile-container" >
        <div id="mobile-title-bar">
                <div id="mobile-logo">
                        <img src="common/img/raylib_logo.png" alt="">
                </div>
                <button id="mobile-close-button">X</button>
        </div>
        <nav class="mobile-menu">
                <a id="mobile-about" href="index.html" >about</a>
                <a id="mobile-examples" href="examples.html" >examples</a>
                <a id="mobile-games" href="games.html" >games</a>
                <a id= "mobile-cheatsheet" href="cheatsheet/cheatsheet.html" >cheatsheet</a>
                <a id="mobile-wiki" href="https://github.com/raysan5/raylib/wiki" target="_blank">wiki</a>
        </nav>
        <div id="mobile-social">
          <a id="mobile-twitter" href="https://www.twitter.com/raysan5" target="_blank" aria-label="raysan5's Twitter"><img src="common/img/icon_twitter.png" /></a>
          <a id="mobile-discord" href="https://discord.gg/raylib" target="_blank" aria-label="raylib discord"><img src="common/img/icon_discord.png" ></a>
          <a id="mobile-twitch" href="https://www.twitch.tv/raysan5" target="_blank" aria-label="raysan5 twitch channel"><img src="common/img/icon_twitch.png" /></a>
          <a id="mobile-kofi" href="https://ko-fi.com/raysan5" target="_blank" aria-label="raylib coffee page for support"><img src="common/img/icon_kofi.png" /></a>
          <a id="mobile-itchio" href="https://raysan5.itch.io" target="_blank" aria-label="raylib itch.io page"><img src="common/img/icon_itchio.png" ></a>
          <a id="mobile-handmade" href="https://raylib.handmade.network/" target="_blank" aria-label="raylib handmadenetwork"><img src="common/img/icon_handmade.png" /></a>
          <a id="mobile-reddit" href="https://www.reddit.com/r/raylib/" target="_blank" aria-label="raylib reddit"><img src ="common/img/icon_reddit.png"/></a>
          <a id="mobile-youtube" href="https://www.youtube.com/c/raylib" target="_blank" aria-label="raylib youtube channel"><img src="common/img/icon_youtube.png" /></a>
          <a id="mobile-patreon" href="https://www.patreon.com/raylib" target="_blank" aria-label="ray's patreon page"><img src="common/img/icon_patreon.png" /></a>
          <a id="mobile-redbubble" href="https://www.redbubble.com/shop/ap/78130012" target="_blank" aria-label="red bubble"><img src="common/img/icon_redbubble.png" /></a>
          <a id="mobile-github" href="https://github.com/raysan5/raylib" target="_blank" aria-label="raylib's github"><img src="common/img/icon_github.png" /></a>
          <a id="mobile-bluesky" href="https://bsky.app/profile/raysan5.bsky.social" target="_blank" aria-label="raylib's bluesky profile"><img src="common/img/icon_bluesky.png" /></a>
        </div>
</div>
`;
class MobileMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
  @keyframes slide-in-nav-mobile{
    from{
        translate: -20px 0;
        opacity: 0;
    }
    to{
        translate: 0 0;
        opacity: 1;
    }    
  }
  :host{      
      animation-name: slide-in-nav-mobile;
      animation-duration: 0.3s;
  }
  :host([data-open="false"]){
    display:none; 
  }
  @media only screen and (max-width: 850px) {
      // :host([data-open="true"]){
      //     --mobile-menu-is-open: "true";
      // }
      // .nav-mobile-container {
      :host{
        position: fixed;   
        top: 0;
        left: 0;
        flex-direction: column;
        width: 100dvw;  
        height: 100dvh;
        z-index: 200;
        overflow-y: scroll;
        background-color: white;        
      }
      #mobile-title-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-inline: 20px;
      }
      #mobile-close-button{
        --button-size: 40px;
        display: flex;
        width: var(--button-size);
        height: var(--button-size);
        border: none;
        background-color: transparent;
        margin-right: 2%;
        padding: 5px;
        &:hover{cursor:pointer}
      }
      #mobile-social{
        display: flex;
        position: relative;
        flex-wrap: wrap;
        margin-inline-start: 25px;
        margin-top: 60px;
        width: 60%;
        height: fit-content;
        --icons-size: 36px;
        gap: 10px;
        a{
            display: flex;
            width: var(--icons-size);
            height: var(--icons-size);
            img{
                position: absolute;
                clip: rect(0px, var(--icons-size), var(--icons-size), 0px);
            }   
            &:hover{
                outline: black 2px solid;
                scale: 1.1;
                transition: scale 0.3s ease;
            }         
        }       
      }
      .mobile-menu{
        display: flex;
        flex-direction: column;
        > a{
            padding-inline-start: 20px;
            padding-block: 20px;
            &:not(.mobile-active){color:#5c5a5a;}
            &:hover{
                color: black;
                background-color:#cecece;
            }
            transition: all 0.2s ease;
        }        
      }
      .mobile-active{
          color: rgb(0, 0, 0);
          border-block: 2px solid #5c5a5a;
          background-color: #cecece;    
      }
  
  }

    `;
    this.setAttribute("data-open", "false");
    const menuTemplate = document.createElement("template");
    menuTemplate.innerHTML = mobileMenuHTML;
    shadow.appendChild(menuTemplate.content.cloneNode(true));
    shadow.appendChild(style);
    this.closeButton = shadow.querySelector("#mobile-close-button");
    this.closeButton.addEventListener("click", () => {
      this.setAttribute("data-open", "false");
    });
    this.menu = shadow.querySelector(".mobile-menu");
    this.menu.addEventListener("click", (e) => {      
        this.setAttribute("data-open", "false");      
    });
    
  }
}
customElements.define("go-to-top-button", GoToTopButton);
customElements.define("hamburger-menu-button", HamburgerMenuButton);
customElements.define("mobile-menu", MobileMenu);