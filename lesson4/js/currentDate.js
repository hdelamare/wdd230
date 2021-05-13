    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    const d = new Date();
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const date = d. getDate();

    const dateFormatted = `${dayName}, ${date} ${monthName} ${year}`;

    document.querySelector('#currDate').textContent = dateFormatted;