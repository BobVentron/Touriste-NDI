document.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('mousemove', (e) => {
        const rect = playButton.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (centerX - x) * 5; // Augmentez le facteur pour un déplacement beaucoup plus grand
        const deltaY = (centerY - y) * 5; // Augmentez le facteur pour un déplacement beaucoup plus grand

        playButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    playButton.addEventListener('mouseleave', () => {
        playButton.style.transform = 'translate(0, 0)';
    });

});