let cifra = ""; // valor actual
let acc = 0; // se acumulan los valores que se teclean
let sumar = false;
let restar = false;
let pOperacion = true;

function displayNumeros(numeros) {
  document.getElementById("display").value = cifra + numeros;
  cifra = document.getElementById("display").value;
}

function suma() {
  if (restar) {
    acc = acc - parseInt(cifra);
    document.getElementById("display").value = acc;
  } else {
    acc = acc + parseInt(cifra);
    document.getElementById("display").value = acc;
  }
  cifra = "";
  sumar = true;
  restar = false;
  pOperacion = false;
}

function resta() {
  if (pOperacion == false) {
    if (sumar) {
      acc = acc + parseInt(cifra);
      document.getElementById("display").value = acc;
    } else {
      acc = acc - parseInt(cifra);
      document.getElementById("display").value = acc;
    }
  } else {
    acc = parseInt(cifra);
    pOperacion = false;
  }

  cifra = "";
  restar = true;
  sumar = false;
}

function resultado() {
  if (sumar) {
    document.getElementById("display").value = acc + parseInt(cifra);
  } else if (restar) {
    document.getElementById("display").value = acc - parseInt(cifra);
  }
  acc = parseInt(document.getElementById("display").value);
  cifra = 0;
}
