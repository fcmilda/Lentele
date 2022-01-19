"use strict";
const inputVardas = document.getElementsByTagName("input")[0];
const inputPavarde = document.getElementsByTagName("input")[1];
const inputAmzius = document.getElementsByTagName("input")[2];

const buttonPrideti = document.getElementsByTagName("button")[0];
const buttonIstrinti1 = document.getElementsByTagName("button")[1];
const buttonIstrinti2 = document.getElementsByTagName("button")[2];

const table = document.querySelector("table");

buttonPrideti.addEventListener("click", funkcijaPrideti);

function funkcijaPrideti(event) {
  event.preventDefault();
  if (inputAmzius.value < 0) {
    alert("Amžius turi būti didesnis už 0.");
  } else if (inputVardas.value && inputPavarde.value && inputAmzius.value) {
    let data = document.createElement("tr");
    data.setAttribute("class", "data");
    data.innerHTML = `
            <td>${inputVardas.value}</td>
            <td>${inputPavarde.value}</td>
            <td>${inputAmzius.value}</td>`;
    table.append(data);
    inputVardas.value = "";
    inputPavarde.value = "";
    inputAmzius.value = "";
  } else alert("Ne visi laukeliai užpildyti!");
}

buttonIstrinti1.addEventListener("click", funkcijaIstrintiPirma);
function funkcijaIstrintiPirma(event) {
  event.preventDefault();
  let data = document.getElementsByClassName("data");
  if (data[0] == undefined) {
    alert("Nėra ką trinti!");
  } else data[0].remove();
}

buttonIstrinti2.addEventListener("click", funkcijaIstrintiPask);
function funkcijaIstrintiPask(event) {
  event.preventDefault();
  let data = document.getElementsByClassName("data");
  if (data[0] == undefined) {
    alert("Nėra ką trinti!");
  } else data[data.length - 1].remove();
}
