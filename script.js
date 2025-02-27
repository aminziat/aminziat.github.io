let index = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const totalSlides = images.length;

    index += direction;
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}
