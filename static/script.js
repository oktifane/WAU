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


    const textElement = document.querySelector('p1');
    textElement.addEventListener('mouseover', () => {
        textElement.style.color = '#f39c12';
    });
    textElement.addEventListener('mouseout', () => {
        textElement.style.color = 'white';
    });

    
});

document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('myVideo');
    const textElementP = document.querySelector('.center p');
    const textElementP1 = document.querySelector('.center p1');
    
    const videos = [
      { src: './vid/waifu.vid', textP: 'Hmmm....', textP1: 'Waifu????!' },
      { src: './vid/bird.vid', textP: 'Shh....', textP1: 'Birrrrrrrd 🐦!!' },
      { src: './vid/fumi.vid', textP: 'Fumi Fumi...', textP1: 'Cay chadat U Lob mi' },
      { src: './vid/JJK.vid', textP: 'Waifu?!', textP1: 'Nahh...🗿' }
    ];
  
    // Generate a random number between 0 and 3
    const randomIndex = Math.floor(Math.random() * 4);
  
    // Set the video source and text content
    videoElement.querySelector('source').setAttribute('src', videos[randomIndex].src);
    textElementP.textContent = videos[randomIndex].textP;
    textElementP1.textContent = videos[randomIndex].textP1;
  
    // Load the new video source
    videoElement.load();
  });
  
