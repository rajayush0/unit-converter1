let inputEl = document.getElementById("input-el");

function updateInputWidth() {
    const length = inputEl.value.length || 1;
    inputEl.style.width = `${length}ch`;
}
inputEl.addEventListener("input", updateInputWidth);
updateInputWidth();

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


updateInputWidth();
let covertbtn = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

covertbtn.addEventListener("click",function(){
    let basevalue = inputEl.value
    lengthEl.textContent = `${basevalue} Meters =  ${(basevalue*meterToFeet).toFixed(2)} Feets | ${basevalue} Feets = ${(basevalue*0.3048).toFixed(2)} Meters`
    volumeEl.textContent = `${basevalue} Liters =  ${basevalue*literToGallon} Gallons | ${basevalue} Gallons = ${basevalue*3.78541} Liters`
    massEl.textContent = `${basevalue} Kilograms =  ${basevalue*kiloToPound} Pounds | ${basevalue} Pounds = ${basevalue*0.453592} Kilograms`

})