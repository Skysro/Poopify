console.log("Welcome to Poopify");

let songIndex = 0;
let songElement = new Audio("songs/1.mp3");
let play = document.getElementById("play");
let gif = document.getElementById("ani");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let currentSongName = document.getElementById("gifText");

let songs = [
  { songName: "Kesariya", filePath: "songs/1.mp3", coverPath: "songs/1.png",duration: "4:28"},
  { songName: "Mere Sanam Ke Khwab", filePath: "songs/2.mp3", coverPath: "songs/2.png",duration:"3:54"},
  { songName: "Tu Jaana Na Piya", filePath: "songs/3.mp3", coverPath: "songs/3.png",duration:"4:06"},
  { songName: "Saanware Aijaiyo", filePath: "songs/4.mp3", coverPath: "songs/4.png",duration:"3:54"},
  { songName: "Iraadey", filePath: "songs/5.mp3", coverPath: "songs/5.png",duration:"2:13"},
  { songName: "Parinda", filePath: "songs/6.mp3", coverPath: "songs/6.png",duration:"5:09"},
  { songName: "Siya", filePath: "songs/7.mp3", coverPath: "songs/7.png",duration: "3:04"},
  { songName: "Mora Piya", filePath: "songs/8.mp3", coverPath: "songs/8.png",duration:"4:46"},
];
songItems.forEach((element,i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  // element.getElementsByClassName("timestamp")[0].innerText = songs[i].duration;
  

})
//play button click

play.addEventListener("click", () => {
  if (songElement.paused || songElement.currentTime <= 0) {
    togglePlayPause();
    
  } else {
    togglePlayPause();
    
  }
});

songElement.addEventListener("timeupdate", () => {
  
  progress = parseInt((songElement.currentTime / songElement.duration) * 100);
  
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  songElement.currentTime = ((myProgressBar.value * songElement.duration) / 100);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    songElement.currentTime += 10;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    songElement.currentTime -= 10;
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Spacebar" || event.key === " ") {
    event.preventDefault();
    togglePlayPause();
  }
});

function togglePlayPause() {
  if (songElement.paused) {
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");
    songElement.play();
    gif.style.opacity= 1;
    
  } 
  else {
    
    play.classList.remove("fa-pause-circle");
    play.classList.add("fa-play-circle");
    songElement.pause();
    gif.style.opacity= 0;
  }
}

const clickPlay = () => {
  Array.from(document.getElementsByClassName("clickPlay")).forEach((element) => {
    element.classList.add("fa-play-circle");
    element.classList.remove("fa-pause-circle");
  })
}

Array.from(document.getElementsByClassName("clickPlay")).forEach((element) => {
  element.addEventListener('click', (e) => {
    clickPlay();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    songElement.src = `songs/${songIndex+1}.mp3`;
    currentSongName.innerText = songs[songIndex].songName;
    songElement.currentTime=0;
    songElement.play();
    gif.style.opacity = 1;
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");

  })});

  document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    songElement.src = `songs/${songIndex+1}.mp3`;
    currentSongName.innerText = songs[songIndex].songName;
    songElement.currentTime = 0;
    songElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 7
    }
    else{
        songIndex -= 1;
    }
    songElement.src = `songs/${songIndex+1}.mp3`;
    currentSongName.innerText = songs[songIndex].songName;
    songElement.currentTime = 0;
    songElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})