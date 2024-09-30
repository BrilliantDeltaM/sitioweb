const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slideImages.length > 0) {
        showSlide(slideIndex);
    }
}

function showSlide(index) {
    // Calcular la posición de desplazamiento
    const offset = index * -100; // Cada imagen ocupa el 100% del ancho del contenedor
    slides.style.transform = `translateX(${offset}%)`; // Aplicar la transformación
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length; // Ajustar el índice
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slideImages.length; // Ajustar el índice
    showSlide(slideIndex);
}
