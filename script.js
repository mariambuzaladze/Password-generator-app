const input = document.querySelector("input");
const inputValue = document.getElementsByClassName("length-text")[0];
let currentValue;
input.addEventListener("input", function () {
  currentValue = input.value;

  input.style.background = `linear-gradient(to right, #a4f3eb ${
    currentValue * 5
  }%, #ccc ${currentValue * 5}%)`;

  inputValue.textContent = currentValue;
});

const includeDivs = document.getElementsByClassName("check");
let clicked = false;
let clickedDivs = [];

for (let i = 0; i < includeDivs.length; i++) {
  includeDivs[i].addEventListener("click", function () {
    if (!clicked) {
      includeDivs[i].classList.add("active");
      clickedDivs.push(i);
      clicked = true;
    } else {
      includeDivs[i].classList.remove("active");

      let indexToRemove = clickedDivs.indexOf(i);
      clickedDivs = clickedDivs
        .slice(0, indexToRemove)
        .concat(clickedDivs.slice(indexToRemove + 1));

      clicked = false;
    }

    console.log(clickedDivs);
  });
}

const passwordDisplay = document.getElementsByClassName("password")[0];

function generatePassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allCharacters = "";

  if (clickedDivs.includes(0)) {
    allCharacters += upperCase;
  }

  if (clickedDivs.includes(1)) {
    allCharacters += lowerCase;
  }

  if (clickedDivs.includes(2)) {
    allCharacters += numbers;
  }

  if (clickedDivs.includes(3)) {
    allCharacters += symbols;
  }

  let password = "";

  for (let i = 0; i < currentValue; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  passwordDisplay.textContent = password;
}
