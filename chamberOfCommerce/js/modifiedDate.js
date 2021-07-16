    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    let d = new Date(document.lastModified);
    let dayName = days[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let time = 0

    if (hours > 12) {
        time = (hours - 12) + ':' + minutes + " PM"
    } else if (hours == 12) {
        time = hours + ':' + minutes + " PM"
    } else {
        time = hours + ':' + minutes + " AM"
    }


    let dateFormatted = `${dayName}, ${date} ${monthName} ${year} ${time}`;

    document.querySelector('#modified').textContent = dateFormatted;