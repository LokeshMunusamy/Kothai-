document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.getElementById("leftarrow");
    const rightArrow = document.getElementById("rightarrow");
    const carousel = document.querySelector(".carousel-images");

    leftArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector("footer button");

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
