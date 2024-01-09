let value = document.getElementById("value");
let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let convertedValue1 = document.getElementById("converted-value1");
let convertedValue2 = document.getElementById("converted-value2");
let convertedValue3 = document.getElementById("converted-value3");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

let conversionUnits = [
    { unit: 'meterToFeet', factor: 3.281 },
    { unit: 'literToGallon', factor: 0.264 },
    { unit: 'kiloToPound', factor: 2.204 }
];

convertBtn.addEventListener("click", function() {
    for (let i = 0; i < conversionUnits.length; i++) {
        let result = (inputEl.value * conversionUnits[i].factor).toFixed(3);
        updateConvertedValue(i, result);
    }
});

function updateConvertedValue(index, result) {
    if (index === 0) {
        convertedValue1.textContent = `${inputEl.value} meter = ${result} feet`;
    } else if (index === 1) {
        convertedValue2.textContent = `${inputEl.value} liter = ${result} gallon`;
    } else if (index === 2) {
        convertedValue3.textContent = `${inputEl.value} kilograms = ${result} pound`;
    }
}
