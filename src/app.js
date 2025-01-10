/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateCard() {
    let symbols = ["♦", "♥", "♠", "♣"];

    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let generateCardByButton = document.querySelector("#generateBtn");

    let randomSymbol = Math.floor(Math.random() * symbols.length);
    console.log(symbols[randomSymbol]);

    let randomNumbers = Math.floor(Math.random() * numbers.length);
    console.log(randomNumbers);

    document.querySelector("#symbolTop").innerHTML = symbols[randomSymbol];
    document.querySelector("#cardNumber").innerHTML = numbers[randomNumbers];
    document.querySelector("#symbolBottom").innerHTML = symbols[randomSymbol];

    let redSymbol =
      symbols[randomSymbol] == "♦" || symbols[randomSymbol] == "♥";

    document.querySelector("#symbolTop").className = redSymbol
      ? "text-danger"
      : "text-dark";
    document.querySelector("#symbolBottom").className = redSymbol
      ? "text-danger"
      : "text-dark";

    generateCardByButton.addEventListener("click", () => generateCard());
  }
  generateCard();
  setInterval(generateCard, 5000);
};
