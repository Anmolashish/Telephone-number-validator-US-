const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const validateNumber = (number) => {
  const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
  if (regex.test(number)) {
    result.innerText = `Valid US number: ${number}`;
  } else {
    result.innerText = `Invalid US number: ${number}`;
  }
};

check.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (input.value[0] === 1) {
    validateNumber(input.value);
  } else {
    validateNumber(input.value);
  }
});

clear.addEventListener("click", () => (result.innerText = ""));
