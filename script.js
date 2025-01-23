function validateInputs() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
  
    if (a === "" || b === "") {
      alert("Please fill in both fields!");
      return false;
    } else if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers!");
      return false;
    }
    return true;
  }

function addition() {
  if (!validateInputs()) return;

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  answer.value = a + b;
}

function subtraction() {
  if (!validateInputs()) return;

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  answer.value = a - b;
}

function multiplication() {
  if (!validateInputs()) return;

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  answer.value = a * b;
}

function division() {
  if (!validateInputs()) return;

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  if (b === 0) {
    alert("Cannot divide by zero!");
    return;
  }
  answer.value = a / b;
}

function percentage() {
  if (!validateInputs()) return;

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  answer.value = (a * b) / 100;
}

function clearXw() {
  console.log("Clear function called!");
//   alert("Clear function called!");
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("answer").value = "";
}