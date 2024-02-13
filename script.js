document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide buttons and the begging GIF
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('beggingGif').style.display = 'none';

    // Update the question to show the celebration message
    document.querySelector('.question').textContent = "WOOHOOOO! Happy Valentine's Day! I love you!";

    // Show the additional message without removing or hiding it
    var additionalMessage = document.getElementById('additionalMessage');
    additionalMessage.style.display = 'block'; // Make sure this stays

    // Dynamically create and append the celebration GIF below the additional message
    var celebrationGif = document.createElement('img');
    celebrationGif.src = 'celebration.gif'; // Adjust the path as needed
    celebrationGif.alt = 'Celebration';
    celebrationGif.classList.add('valentine-gif'); // Apply the valentine-gif class for styling
    // Append the celebration GIF at the end of the content, below the additional message
    document.querySelector('.content').appendChild(celebrationGif);
});


document.getElementById('noBtn').addEventListener('click', function() {
    let currentScale = parseFloat(this.style.transform.replace('scale(', '').replace(')', '')) || 1;
    let newScale = currentScale - 0.1; // Decrease scale
    if (newScale > 0.5) { // Check if the scale is above a certain threshold
        this.style.transform = `scale(${newScale})`;
        document.getElementById('yesBtn').style.transform = `scale(${1 + (1 - newScale)})`; // Enlarge "Yes" button accordingly
    } else {
        this.parentNode.removeChild(this); // Remove "No" button if it's too small
    }
});
