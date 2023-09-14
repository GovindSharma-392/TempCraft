let Celsius = document.getElementById('Celsius');
let Fahrenheit = document.getElementById('Fahrenheit');
let Kelvin = document.getElementById('Kelvin');

Celsius.oninput = function() {
    let c = parseFloat(Celsius.value);
    let f = (c * 9) / 5 + 32;
    let k = c + 273.15;

    Fahrenheit.value = f.toFixed(2);
    Kelvin.value = k.toFixed(2);
}

Fahrenheit.oninput = function() {
    let f = parseFloat(Fahrenheit.value);
    let c = (f - 32) * 5 / 9;
    let k = (f + 459.67) * 5 / 9;

    Celsius.value = c.toFixed(2);
    Kelvin.value = k.toFixed(2);
}

Kelvin.oninput = function() {
    let k = parseFloat(Kelvin.value);
    let c = k - 273.15;
    let f = (k * 9) / 5 - 459.67;

    Celsius.value = c.toFixed(2);
    Fahrenheit.value = f.toFixed(2);
}

// Handle button clicks
document.getElementById('home').addEventListener('click', function() {
    // Add functionality to navigate to the home page (if desired)
    console.log('Home button clicked!');
});

document.getElementById('about').addEventListener('click', function() {
    // Add functionality to navigate to the about page (if desired)
    console.log('About button clicked!');
});
