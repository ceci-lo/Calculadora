let cifra = "";
let acc = 0;
function displayNumeros(numeros) {
  document.getElementById("display").value = cifra + numeros;
  cifra = document.getElementById("display").value;
}

function suma() {
  acc = acc + parseInt(cifra);
  document.getElementById("display").value = acc;
  cifra = "";
}
function resta() {
  let max = Math.max(acc, parseInt(cifra));
  acc = max - acc;
  document.getElementById("display").value = acc;
  cifra = "";
}
