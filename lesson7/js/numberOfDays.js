window.localStorage.setItem('storedDate', d.getTime());


let storedDate = window.localStorage.getItem('storedDate');

let newDate = new Date();

const oneDay = 1000 * 60 * 60 * 24;

const diffInTime = newDate.getTime() - storedDate;

const diffInDays = Math.round(diffInTime / oneDay);

console.log(storedDate);
console.log(newDate.getTime());
console.log(diffInTime);