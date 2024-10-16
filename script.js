document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen with birthday date for 4 seconds
    setTimeout(function() {
        // Hide loading screen
        document.getElementById('loading-screen').style.display = 'none';

        // Show main content
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-content').style.display = 'block';
    }, 4000); // Adjust the time if necessary

    // Confetti generation
    const confettiContainer = document.getElementById('confetti-container');
    const confettiCount = 150; // Number of confetti pieces

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random horizontal position
        confetti.style.left = `${Math.random() * 100}vw`;

        // Random animation duration
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;

        // Append each confetti piece to the container
        confettiContainer.appendChild(confetti);
    }
});
