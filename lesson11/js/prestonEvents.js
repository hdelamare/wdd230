let preston = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(preston)
  .then((response) => response.json())
  .then((preston) => {
    console.table(preston);
    let towns = preston["towns"];
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 6) {
            let prestonEvents = document.createElement('div');
            let prestonEvent1 = document.createElement('p');
            let prestonEvent2 = document.createElement('p');
            let prestonEvent3 = document.createElement('p');

            prestonEvent1.textContent = towns[i].events[0];
            prestonEvent2.textContent = towns[i].events[1];
            prestonEvent3.textContent = towns[i].events[2];

            prestonEvents.appendChild(prestonEvent1);
            prestonEvents.appendChild(prestonEvent2);
            prestonEvents.appendChild(prestonEvent3);

            document.querySelector('#preston-events').appendChild(prestonEvents);
}}});