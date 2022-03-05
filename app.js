const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours')
const minutesE1 = document.getElementById('minutes')
const secondsE1 = document.getElementById('seconds')
const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    
    const seconds = (newYearsDate - currentDate) / 1000;


    const days = Math.floor(seconds / 3600 /24);
    const hours = Math.floor(seconds/ 3600) % 24;
    const minutes = (Math.floor(seconds/ 60) % 60) % 60;
    const totalSeconds = Math.floor( seconds) % 60;


    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minutesE1.innerHTML = minutes;
    secondsE1.innerHTML = totalSeconds;


}
function format(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);