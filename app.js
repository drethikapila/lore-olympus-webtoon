document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
