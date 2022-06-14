const newYears = "1 Jan 2023";

window.onload = function () {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    countdown();

    setInterval(countdown, 1000);
};

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totaLseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totaLseconds / 3600 / 24);
    const hours = Math.floor(totaLseconds / 3600) % 24;
    const minutes = Math.floor((totaLseconds / 60) % 60);
    const seconds = Math.floor(totaLseconds) % 60;

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    //console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}