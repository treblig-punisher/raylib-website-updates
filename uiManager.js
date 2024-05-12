const backToTopButton = document.querySelector(".back-to-top-arrow");
const mobileNavBar = document.querySelector(".nav-mobile-container");
const mobileCloseButton = document.querySelector("#mobile-close-button");
const hamburgerButton = document.querySelector("#hamburger-button");
const mobileSocialsContainer = document.querySelector("#mobile-social");

hamburgerButton.addEventListener("click", enableHamburgerNavBar);
mobileCloseButton.addEventListener("click", disableHamburgerNavBar);
mobileSocialsContainer.insertAdjacentHTML("beforeend",
    `<a id="mobile-twitter" href="https://www.twitter.com/raysan5" target="_blank" aria-label="raysan5's Twitter"><img src="common/img/icon_twitter.png" /></a>
    <a id="mobile-discord" href="https://discord.gg/raylib" target="_blank" aria-label="raylib discord"><img src="common/img/icon_discord.png" ></a>
    <a id="mobile-twitch" href="https://www.twitch.tv/raysan5" target="_blank" aria-label="raysan5 twitch channel"><img src="common/img/icon_twitch.png" /></a>
    <a id="mobile-kofi" href="https://ko-fi.com/raysan5" target="_blank" aria-label="raylib coffee page for support"><img src="common/img/icon_kofi.png" /></a>
    <a id="mobile-itchio" href="https://raysan5.itch.io" target="_blank" aria-label="raylib itch.io page"><img src="common/img/icon_itchio.png" ></a>
    <a id="mobile-handmade" href="https://raylib.handmade.network/" target="_blank" aria-label="raylib handmadenetwork"><img src="common/img/icon_handmade.png" /></a>
    <a id="mobile-reddit" href="https://www.reddit.com/r/raylib/" target="_blank" aria-label="raylib reddit"><img src ="common/img/icon_reddit.png"/></a>
    <a id="mobile-youtube" href="https://www.youtube.com/c/raylib" target="_blank" aria-label="raylib youtube channel"><img src="common/img/icon_youtube.png" /></a>
    <a id="mobile-patreon" href="https://www.patreon.com/raylib" target="_blank" aria-label="ray's patreon page"><img src="common/img/icon_patreon.png" /></a>
    <a id="mobile-redbubble" href="https://www.redbubble.com/shop/ap/78130012" target="_blank" aria-label="red bubble"><img src="common/img/icon_redbubble.png" /></a>
    <a id="mobile-github" href="https://github.com/raysan5/raylib" target="_blank" aria-label="raylib's github"><img src="common/img/icon_github.png" /></a>`
);
function enableHamburgerNavBar(){
    mobileNavBar.setAttribute("data-open", "true");
}
function disableHamburgerNavBar(){    
    mobileNavBar.setAttribute("data-open", "false");
}
window.addEventListener("scroll", toggleGoToTopButton);

function toggleGoToTopButton()
{
    if (window.scrollY <= 200)
    {
        backToTopButton.style.display = "none"; 
        backToTopButton.classList.remove("spring-anim-class");
    }
    else
    {
        backToTopButton.style.display = "flex";
        backToTopButton.classList.add("spring-anim-class");
    }
}

