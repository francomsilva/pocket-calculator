const calculator {
  displayValue: '0';
  firstOperand: null;
  waitingForSecondOperand: false;
  operator: null;
}
function updateDisplay() {
  const display = document.getElementById('result');
  display.value = calculator.displayValue;
}

updateDisplay();

function numberInput () {
  document.getElementById("result").value+=val
}

function solve() {
  let x = document.getElementById("result").value
  let y = eval(x)
  document.getElementById("result").value = y
}
function clear {
  document.getElementById("result").value = ""
}
