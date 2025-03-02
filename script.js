// script.js
document.querySelector('.heart-btn').addEventListener('click', function () {
    // Hide the heart button
    document.getElementById('heart-button').style.display = 'none';
    // Show the heart section
    document.getElementById('heart-section').style.display = 'block';
    // Generate stars
    generateStars();
  });
  
  function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }
  }