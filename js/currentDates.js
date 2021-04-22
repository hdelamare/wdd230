const date = new Date();
const currYear = date.getFullYear();
document.querySelector('#currentYear').textContent = currYear;

const modifiedTime = document.lastModified;
document.querySelector('#modifiedTime').textContent = modifiedTime;
