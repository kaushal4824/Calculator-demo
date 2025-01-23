function addition(){

    if (!validateInputs()) return;  // Validate inputs before calculation

    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    answer.value=a+b;
}

function subtraction(){

    if (!validateInputs()) return;  // Validate inputs before calculation

    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    answer.value=a-b;
}

function multiplication(){

    if (!validateInputs()) return;  // Validate inputs before calculation

    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    answer.value=a*b;
}

function division(){

    if (!validateInputs()) return;  // Validate inputs before calculation

    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    
    if (b === 0) {
        alert('Cannot divide by zero!');
        return;
    }
        answer.value=a/b;   
}

function percentage() {

    if (!validateInputs()) return;  // Validate inputs before calculation

    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    answer.value = (a * b) / 100;   
}

function clear(){
    alert("Clear button clicked!");
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('answer').value = '';
}

function validateInputs() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    
    if (a === '' || b === '') {
        alert('Please fill in both fields!');
        return false;  // Validation failed
    }else if (isNaN(a) || isNaN(b)) {
        alert('Please enter valid numbers!');
        return false;  // Validation failed
    }
    return true;  // Validation passed
}