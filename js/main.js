"use strict";

const form = document.querySelector("#preventive-form"); // individuo il form nel documento html

const userCode = document.querySelector("#promo-code"); // codice promozionale
const selection = document.querySelector("#selection-input"); //  selection
const priceBanner = document.querySelector("#price-banner"); //  div del prezzo
const priceIntUI = document.querySelector("#price-int"); // prezzo int
const priceFloatsUI = document.querySelector("#price-floats"); //prezzo float
const wrongCode = document.querySelector("#wrong-code"); // individuo l'elemento del messaggio "codice sbagliato" da popolare nel documento html
const wrongSelect = document.querySelector("#wrong-code");
// creo un array di oggetti contenenti i tipi di lavoro e la tariffa associata
const selectionObject = [
  {
    name: "Seleziona il Lavoro",
    rate: 0,
  },
  {
    name: "Backed Development",
    rate: 20.5,
  },
  {
    name: "Frontend Development",
    rate: 15.3,
  },
  {
    name: "Project Analysis",
    rate: 33.6,
  },
];
let price;

//funzione che genera un tag <option> nella <select> con testo e valore dati in input
function addOption(text, value) {
  let option = document.createElement("option");
  option.text = text;
  option.value = value;
  selection.add(option, selection[option.value]);
}
// <option> per ogni oggetto nell'array
selectionObject.forEach((element, index) => addOption(element.name, index + 1));

// listner del form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (selection.value !== "1") {
    // create a request
    const req = new XMLHttpRequest();
    req.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(req.responseText);
        price = this.responseText;
        priceBanner.classList.remove("d-none");
        //numeri interi
        priceIntUI.innerHTML = `€ ` + price.slice(0, price.length - 3);
        //numeri decimali
        priceFloatsUI.innerHTML = price.slice(price.length - 3);
      }
    };
    // open request
    req.open(
      "GET",
      "http://localhost:8080/greeting?" +
        "input=" +
        selection.value +
        "&&promoCode=" +
        userCode.value,
      true
    );
    // send request
    req.send();
  } else {
    console.log("inserisci la selezione");
  }
});
