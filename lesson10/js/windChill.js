function windChill(temp, speed) {

    if ((temp <= 50) && (speed > 3)) {    
        let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        document.querySelector('#windchill').innerHTML = f.toFixed(0);
    }

    else {
        document.querySelector('#windchill').innerHTML = 'N/A';
    }};