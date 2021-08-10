// UI
const video = document.getElementById('video');

const play = document.getElementById('play'),
    stop = document.getElementById('stop'),
    progress = document.getElementById('progress'),
    timestamp = document.getElementById('timestamp');



// Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

// Play & Pause Video
function togglevideostatus(){
    // paused from video api
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// Update Play & Pause Icon
function updateplayicon(){
    if(video.paused){
        play.innerHTML=`<i class="fas fa-play fa-2x"></i>`;
    }else{
        play.innerHTML=`<i class="fas fa-pause fa-2x"></i>`;
    }
}

// Update Progress & Timestamp
function updateprogress(){
    // console.log(video.currentTime);
    // console.log(video.duration);

    progress.value = (video.currentTime / video.duration) * 100;
}
