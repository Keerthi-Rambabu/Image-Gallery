
let scrollContainer = document.querySelector(".gallery");
let back = document.getElementById("back");
let next = document.getElementById("next");
let imageSize = scrollContainer.offsetWidth; // Assuming all images have the same width

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

next.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += imageSize;
});

back.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= imageSize;
});
