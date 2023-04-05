const audio = document.getElementById("myAudio");
const myAudio = new Audio("images/One Last Kiss.mp3");
const musicPlayer = document.querySelector('#music-player');
const icon = document.querySelector("#music");
let isplay = false
musicPlayer.addEventListener('click', () => {
    if(isplay){
        myAudio.pause();
        isplay=false
        icon.className="fa-solid fa-volume-xmark"

    }else{
        myAudio.play();
        isplay=true
        icon.className="fa-solid fa-volume-high"
    }

})