const backToTopArrow = document.querySelector(".back-to-top-arrow");
window.addEventListener("scroll", (e) =>
{
    if (window.scrollY <= 200){
         backToTopArrow.style.display = "none"; 
         backToTopArrow.classList.remove("spring-anim-class");
    }
    else {
        backToTopArrow.style.display = "flex";
        backToTopArrow.classList.add("spring-anim-class");
    }
});