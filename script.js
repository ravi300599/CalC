const screenDisplay = document.querySelector('.screen');
const butttons = document.querySelectorAll('button');
let calculation = [];
let accumlativeCalculation;

function calculate(button){
    const value = button.innerHTML;

    if (value == "CLEAR") {
        calculation = [];
        screenDisplay.textContent = "0";
    }else if (value == "=") {
        screenDisplay.textContent = eval
        (accumlativeCalculation);
        calculation = [];
        accumlativeCalculation = "";
    } else {
        calculation.push(value);
        accumlativeCalculation = calculation.join('');
        screenDisplay.textContent = accumlativeCalculation;
    }
}


butttons.forEach(button => button.addEventListener('click', () => calculate(button)));