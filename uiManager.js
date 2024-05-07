const backToTopButton = document.querySelector(".back-to-top-arrow");
window.addEventListener("scroll", () =>
{
    if (window.scrollY <= 200){
         backToTopButton.style.display = "none"; 
         backToTopButton.classList.remove("spring-anim-class");
    }
    else {
        backToTopButton.style.display = "flex";
        backToTopButton.classList.add("spring-anim-class");
    }
});