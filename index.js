const countData = new Date('Jan 1,2023 00:00:00').getTime();

function newYear(){
    const now = new Date().getTime();
    let gap = countData - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;


    let gun = Math.floor(gap / (day));
    let saat = Math.floor((gap % (day)) / (hour));
    let deqiqe = Math.floor((gap % (hour)) / (minute));
    let saniye = Math.floor((gap % (hour)) / (second));

    document.getElementById('day').innerText = gun;
    document.getElementById('hour').innerText = saat;
    document.getElementById('minute').innerText = deqiqe;
    document.getElementById('second').innerText = saniye;
}

setInterval(function(){
    newYear()
},1000)