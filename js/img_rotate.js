document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const image = container.querySelector('.img-fluid');

        container.addEventListener('mousemove', function(event) {
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 20; // Rotate range
            const rotateY = ((x - centerX) / centerX) * -20; // Rotate range

            image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        container.addEventListener('mouseleave', function() {
            image.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
});
