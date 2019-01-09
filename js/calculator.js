function display () {
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
