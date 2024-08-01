// I'm n0t a Frontend Developer 
// I was inspired by this page from Authlol.
// And I used ChatGpt so.....
// Idk 

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");

    // Function to play the video
    function playVideo() {
        video.play().catch(function(error) {
            console.log("Autoplay was prevented. User interaction required to play the video.");
        });
    }

    // Unmute the video on user interaction
    document.body.addEventListener("click", function() {
        video.muted = false;  // Unmute the video
        playVideo();          // Attempt to play the video again
    });

    // Start the video (it will be muted initially)
    playVideo();
});
  document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('p');
    textElements.forEach((textElement) => {
        textElement.addEventListener('mouseover', () => {
            textElement.style.color = '#f39c12';
        });
        textElement.addEventListener('mouseout', () => {
            textElement.style.color = 'white';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('p1');
    textElement.addEventListener('mouseover', () => {
        textElement.style.color = '#f39c12';
    });
    textElement.addEventListener('mouseout', () => {
        textElement.style.color = 'white';
    });
});