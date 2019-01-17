var evaluateString = '';
var lastNumber = true;
var lastSymbol = false;
var lastEqual = false;

function input(num) {
  if (lastEqual) {
    clear(); lastEqual = false;
  }

  if (lastNumber) {
    document.calculator.display.value = (document.calculator.display.value + num);
    lastSymbol = true;
  } else {
    document.calculator.display.value = (num);
    lastSymbol = true; lastNumber = true;
  }
  evaluateString = evaluateString + num;
}

function symbol(sym) {
  if (lastSymbol) {
    document.calculator.display.value = (sym);
    lastSymbol = false; lastNumber = false; lastEqual = false; evaluateString = evaluateString + sym;
  }
}

function equal() {
  document.calculator.display.value = eval(evaluateString);
  evaluateString = eval(evaluateString).toLocaleString("en"); lastNumber = false; lastEqual = true;
}

function clear() {
  document.calculator.display.value = ' ';
  evaluateString = ''; lastNumber = true; lastSymbol = false;
}

function negation() {
  document.calculator.display.value = document.calculator.display.value * -1;
}

function percentage() {
  document.calculator.display.value = document.calculator.display.value / 100;
}
