let date = new Date();
let currYear = date.getFullYear();
document.querySelector('#currYear').textContent = currYear;

let modifiedTime = document.lastModified;
document.querySelector('#modTime').textContent = modifiedTime;