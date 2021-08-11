// UI
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const year = document.getElementById("year");

const countdown = document.getElementById("countdown");
const loading = document.getElementById( "loading");

const currentyear = new Date().getFullYear();
// console.log(currentyear);  (currentyear ကိုလိုချင်လို့ .getfullyear နဲ့ကောက်)

const newyeartime = new Date(`january 01 ${currentyear + 1} 00:00:00`);
// console.log(newyeartime); (newyeartime ကို dynamically လိုချင်လို့ formant သွင်းပေးထားတာ)

// .textContent ကိုအသုံးပြုပြီး .year ထဲကိုထည့်တာ +1 ပေါင်းထားလို့ 2022 ရောက်ရင်  2023 ကို auto change
year.textContent = currentyear+1;


// ပြောင်းနေတဲ့ အချိန်တွေတွက်ဖို့ function တစ်ခုရေး
function updatecountdown(){
    // console.log('hay');
    const currenttime = new Date();
    // console.log(currenttime);

    const diff = newyeartime - currenttime;
    // console.log(diff);

    // Math.floor ka decimal ko phyote
                        //ms    sec   min  h   d
    const d = Math.floor(diff / 1000 /60 /60 /24);
    // console.log(d); 

    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    // console.log(h);                        (စားကြွင်းကိုယူတာ)

    const m = Math.floor(diff /1000 / 60) % 60;
    // console.log(m);

    const s = Math.floor(diff / 1000 ) %60;
    // console.log(s);

// .textcontent or .innerText ကိုသုံးပြီး html ထဲထည့်တာ
    days.textContent = d;
    // h < 10 ? "0"+h : h (condition yay dr 0 htet ngal yin 09,08 paw ag)
    hours.textContent = h < 10 ? "0"+h : h;
    minutes.innerText = m < 10 ? "0"+m : m;
    seconds.textContent = s < 10 ? "0"+s : s;

}

// loading ဆိုတဲ့ GIF လေးကို 1sec ပေါ်ပြီးပြောက်စေချင်လို့ 
// (setTimeout ဆိုတာ transaction delay တို့နေရာမှာသုံးတယ်)
setTimeout( ()=>{           // arrow function
    loading.remove();
    countdown.style.display="flex";
},1000);

// updatecountdown ဆိုတဲ့ function ကို 1sec တိုင်းမှာ reload လုပ်
setInterval(updatecountdown, 1000);