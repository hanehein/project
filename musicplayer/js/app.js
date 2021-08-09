//UI
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('song-title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const cover = document.getElementById('cover');
const audio = document.getElementById('audio');

const prevbtn = document.getElementById('backwardbtn'),
    PlayPausebtn = document.getElementById('play-stop'),
    nextbtn = document.getElementById('forwardbtn');

const songname = document.getElementById('song-title');

let playimg = "./img/play.svg";
let pauseimg = "./img/pause.svg";

PlayPausebtn.src = playimg;
// let isPlaying = true;

let songindex = 0;

const songs = ['Heaven','Love is Gone', 'MOMENT', 'Mood','you broke me first'];
// console.log(songs[songindex]);

loadsong(songs[songindex]);
    

function loadsong(music){
    // console.log(music);
    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}



function playsong(){
    PlayPausebtn.src = pauseimg;
    musiccontainer.classList.add('play');
    
    audio.play();
}

function pausesong(){
    PlayPausebtn.src = playimg;
    musiccontainer.classList.remove('play');

    audio.pause();
}

PlayPausebtn.addEventListener('click',()=>{
    // console.log('hey');
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

prevbtn.addEventListener('click', previoussong);
nextbtn.addEventListener('click', nextsong);

function previoussong(){
    songindex--;
    // console.log('songindex');

    if(songindex < 0){
        songindex = songs.length - 1;
    }

    loadsong(songs[songindex]);
    playsong();
}

function nextsong(){
    songindex++;
    // console.log('songindex');

    if(songindex > songs.length - 1){
        songindex = 0;
    }

    loadsong(songs[songindex]);
    playsong();
}

audio.addEventListener('timeupdate', updateprogress);
// console.log('timeupdate');

function updateprogress(){
    // console.log('audio.currentTime');
    // console.group('audio.duration');

    const progresspercent = (audio.currentTime / audio.duration) * 100;
    // console.log(progresspercent);
    progress.style.width = `${progresspercent}%`;
}

progresscontainer.addEventListener('click', setprogress);

function setprogress(e){
    // console.log(e);

    const width = e.target.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const duration = audio.duration;
    console.log('duration');

    audio.currentTime = (clickx / width) * duration;
}

audio.addEventListener('ended', nextsong);
