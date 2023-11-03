const audio = document.getElementById('audio');
const image = document.getElementById('image');
const playlist = document.querySelector('.playlist');
const playlistItems = playlist.querySelectorAll('li');

// Initialize the audio player with the first song in the playlist
let currentTrack = 0;
audio.src = playlistItems[currentTrack].querySelector('.song').href;

// Play the selected track from the playlist
playlistItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    currentTrack = index;
    audio.src = item.querySelector('.song').href;
    audio.play();
  });
  
});
// Play the next track in the playlist
audio.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % playlistItems.length;
  audio.src = playlistItems[currentTrack].querySelector('.song').href;
  audio.play();
});

//image change
let currentImage = 0;
image.src = playlistItems[currentImage].querySelector('.photo').href;

playlistItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    currentImage = index;
    image.src = item.querySelector('.photo').href;
    
  });
});
image.addEventListener('ended', () => {
  currentImage = (currentImage + 1) % playlistItems.length;
  image.src = playlistItems[currentImage].querySelector('.photo').href;
});
