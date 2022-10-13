
const text = document.querySelector('h2');
// console.log(now, countdownDate);



function getChrono(){
const now = new Date().getTime();
const countdownDate = new Date('december 1, 2022').getTime();

const distanceBase = countdownDate - now;

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
// console.log(days);
const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);
// console.log(days, hours, minutes, seconds);

text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;

}

const countDownInterval = setInterval(() => {
    getChrono()
}, 1000);