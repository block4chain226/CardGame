const playerVideo = document.querySelector(".player__video");
const video = document.querySelector(".video");
const bigPlay = document.querySelector(".control__big-play");
const littlePlay = document.querySelector(".control__little-play");
const controlProgress = document.querySelector(".control__progress");
const ranges = document.querySelectorAll(".control__range");

//function
function handleRange(e) {
  console.log(e);
}
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

///listen
ranges.forEach((item) => item.addEventListener("click", handleRange));
playerVideo.addEventListener("click", togglePlay);
