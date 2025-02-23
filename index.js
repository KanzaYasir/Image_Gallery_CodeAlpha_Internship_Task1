const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}
