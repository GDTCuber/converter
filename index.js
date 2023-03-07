/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let convertBtn = document.getElementById('convert-btn')
let num = 0


convertBtn.addEventListener('click',function(){
       num = inputEl.value
    length()
    volume()
    mass()

})


function length() {
  let meters = (num * 0.3048).toFixed(3);
  let feet = (num * 3.2808).toFixed(3);
  lengthEl.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

function volume(){
    let liter = (num * 0.264).toFixed(3)
    let gallons = (num * 3.78541).toFixed(3)
    volumeEl.textContent = `${num} liter = ${gallons} gallons | gallons = ${liter} liters`
}
function mass(){
    let kilograms = (num * 0.204).toFixed(3)
    let pounds = (num * 0.45359237).toFixed(3)
    massEl.textContent = `${kilograms} = ${pounds} pounds | pounds = ${kilograms} kilos `
}
