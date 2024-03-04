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
const checkboxes = document.getElementsByClassName("checkbox-input");
let clicked = false;
let clickedDivs = [];

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("input", function () {
    if (checkboxes[i].checked) {
      includeDivs[i].classList.add("active");
      clickedDivs.push(i);
    } else {
      includeDivs[i].classList.remove("active");
      let indexToRemove = clickedDivs.indexOf(i);
      clickedDivs = clickedDivs
        .slice(0, indexToRemove)
        .concat(clickedDivs.slice(indexToRemove + 1));
    }

    console.log(clickedDivs);
  });
}

const passwordDisplay = document.getElementsByClassName("password")[0];
const strength = document.getElementsByClassName("strengths");
const strengthText = document.getElementsByClassName("strength-text")[0];

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

  for (let i = 0; i < clickedDivs.length; i++) {
    strength[i].classList.add("colored");
  }

  if (clickedDivs.length === 1) {
    strengthText.textContent = "WEAK";
  } else if (clickedDivs.length === 2) {
    strengthText.textContent = "MEDIUM";
  } else if (clickedDivs.length === 3) {
    strengthText.textContent = "STRONG";
  } else {
    strengthText.textContent = "VERY STRONG";
  }
}
