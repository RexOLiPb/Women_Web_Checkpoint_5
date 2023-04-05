const audio = document.getElementById("myAudio");
const myAudio = new Audio("images/One Last Kiss.mp3");
const musicPlayer = document.querySelector("#music-player");
const icon = document.querySelector("#music");
const skipEl = document.querySelector(".skip");

let isplay = false;
musicPlayer.addEventListener("click", () => {
  if (isplay) {
    myAudio.pause();
    isplay = false;
    icon.className = "fa-solid fa-volume-xmark";
  } else {
    myAudio.play();
    isplay = true;
    icon.className = "fa-solid fa-volume-high";
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    skipEl.classList.add("show");
  } else {
    skipEl.classList.remove("show");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 9) {
    skipEl.classList.add("show");
  }
});
