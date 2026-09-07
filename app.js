import { celsiusKeFahrenheit } from './logika.js';

const input = document.querySelector('#celsius');
const button = document.querySelector('#convertButton');
const resetButton = document.querySelector('#resetButton');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const celsius = Number(input.value);

    if (input.value.trim() === '' || Number.isNaN(celsius)) {
        result.textContent = 'Masukkan angka Celsius yang valid.';
        return;
    }

    const fahrenheit = celsiusKeFahrenheit(celsius);
    result.textContent = `${celsius} °C = ${fahrenheit} °F`;
});

resetButton.addEventListener('click', () => {
    input.value = '';
    result.textContent = 'Hasil akan tampil di sini.';
    input.focus();
});




