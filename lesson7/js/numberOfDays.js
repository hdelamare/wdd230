let storedDate = new Date(localStorage.getItem('storedDate'));

const oneDay = 1000 * 60 * 60 * 24;

let diffInTime = d.getTime() - storedDate.getTime();

let diffInDays = Math.round(diffInTime / oneDay);

localStorage.clear();
if ('storedDate' in localStorage) {
    document.querySelector('.lastvisit').innerHTML = diffInDays + ' days ago.';
    alert('yes');
} else {
    document.querySelector('.lastvisit').innerHTML = 'This is your first visit!'
    alert('no');
}

storeDate()

function storeDate() {
    localStorage.setItem('storedDate', d);
}