//UI
const musiccontainer = document.getElementById('music-container');

    // 1 group htal moh comma(,) thone pee kout dr
const title = document.getElementById('title'),
      progresscontainer = document.getElementById('progress-container'),
      progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
      playbtn = document.getElementById('play'),
      nextbtn = document.getElementById('next');

    //song ko first a pote ka sa chin lo 0 pay dr
let songindex = 0;

//Song title
const songs = ['sample1','sample2','sample3'];
    // console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){
    // console.log(music);
    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

//Event Listener for Play / Pause
playbtn.addEventListener('click',()=>{
    // console.log(hey);
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

//Play Song function
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

//Pause Song function
function pausesong(){
    musiccontainer.classList.remove('play');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause();
}

//Change Song 
prevbtn.addEventListener('click', previoussong);
nextbtn.addEventListener('click', nextsong);

//Previous Song Function
function previoussong(){
    // console.log('songindex');
    songindex--;

    if(songindex < 0){
        songindex = songs.length - 1;
    }

    loadsong(songs[songindex]);
    playsong();
}

//Next Song Function
function nextsong(){
    // songindex += 1;
    songindex++;
    // console.log(songindex);

    if(songindex > songs.length - 1){
        songindex = 0;
    }

    loadsong(songs[songindex]);
    playsong();
}

// Update Progress Bar
function updateprogress(e){
    // console.log(audio.currentTime);
    // console.group(audio.duration);

    // Method 1
    // const progresspercent = (audio.currentTime / audio.duration) * 100;
    // // console.log(progresspercent);
    // progress.style.width = `${progresspercent}%`;


    // Method 2 
        //event call
    //console.log(this);
    //console.log(e);
    //console.log(e.srcElement);
        // const currenttime = e.target.currentTime;
        // const duration = e.target.duration;
        // const progresspercent = (currenttime / duration) * 100;
        // progress.style.width = `${progresspercent}%`;

    // Method 3
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // const progresspercent = (currentTime / duration) * 100;
    // progress.style.width = `${progresspercent}%`;

    // Method 4
    const{currentTime,duration} = e.target;
    const progresspercent = (currentTime / duration) * 100;
        progress.style.width = `${progresspercent}%`;

}

// Time Play and Stop Update
audio.addEventListener('timeupdate',updateprogress);

//Click on Progress Bar
progresscontainer.addEventListener('click', setprogress);

//Set Progress Bar
function setprogress(e){
    // console.log('e.target');

    const width = e.target.clientWidth;
    // console.log('width');

// progress container မှာ click ထောက်တဲ့နေရာကိုဖမ်းတာ
    const clickx = e.offsetX;
    // console.log('clickx');

    const duration = audio.duration;
    // console.log('duration');

//audio.currentTime ကို overwrite လုပ်လိုက်တာ
    audio.currentTime = (clickx / width) * duration;

}

// Next Song when the song end
audio.addEventListener('ended', nextsong);