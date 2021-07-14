const requestJSON = 'json/businesses.json';

fetch(requestJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img')
        let street_add = document.createElement('p');
        let city_add = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = businesses[i].name;
        logo.setAttribute('src', 'images/' + businesses[i].logo);
        logo.setAttribute('alt', businesses[i].name + ' - Logo');
        logo.setAttribute('loading', 'lazy');
        street_add.textContent = businesses[i].street_address;
        city_add.textContent = businesses[i].city_address;
        phone.textContent = businesses[i].phone_number;
        website.setAttribute('href', businesses[i].website);
        website.setAttribute('target', 'blank');
        website.textContent = businesses[i].name;

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(street_add);
        card.appendChild(city_add);
        card.appendChild(phone);
        card.appendChild(website);

        document.querySelector('.cards').appendChild(card);
  }});