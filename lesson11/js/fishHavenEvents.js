const fishHaven = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(fishHaven)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 2) {
            let fishHavenEvents = document.createElement('div');
            let fishHavenEvent1 = document.createElement('p');
            let fishHavenEvent2 = document.createElement('p');
            let fishHavenEvent3 = document.createElement('p');
            let fishHavenEvent4 = document.createElement('p');
            

            fishHavenEvent1.textContent = towns[i].events[0];
            fishHavenEvent2.textContent = towns[i].events[1];
            fishHavenEvent3.textContent = towns[i].events[2];
            fishHavenEvent4.textContent = towns[i].events[3];

           
            fishHavenEvents.appendChild(fishHavenEvent1);
            fishHavenEvents.appendChild(fishHavenEvent2);
            fishHavenEvents.appendChild(fishHavenEvent3);
            fishHavenEvents.appendChild(fishHavenEvent4);
            

            document.querySelector('#fish-haven-events').appendChild(fishHavenEvents);
}}});