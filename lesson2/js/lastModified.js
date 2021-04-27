let date = new Date();
let currYear = date.getFullYear();
document.querySelector('#currentYear').textContent = currYear;

let modifiedTime = document.lastModified;
document.querySelector('#modifiedTime').textContent = modifiedTime;