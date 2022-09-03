const selectElement = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");

selectElement.addEventListener("change", (event) => {
  const seleccionado = event.target.value;

  if (seleccionado === "Suzuki") {
    modelo.innerHTML =
      "<option value=''>Seleccione</option><option value='Suzuki Swift'>Suzuki Swift</option><option value='Suzuki Baleno'>Suzuki Baleno</option>";
  }
  if (seleccionado === "Toyota") {
    modelo.innerHTML =
      "<option value=''>Seleccione</option><option value='Toyota Corolla'>Toyota Corolla</option><option value='Toyota Yaris'>Toyota Yaris</option>";
  }
  if (seleccionado === "Ford") {
    modelo.innerHTML =
      "<option value=''>Seleccione</option><option value='Ford EcoSport'>Ford EcoSport</option><option value='Ford Bronco'>Ford Bronco</option>";
  }
  if (seleccionado === "Chevrolet") {
    modelo.innerHTML =
      "<option value=''>Seleccione</option><option value='Chevrolet Spark'>Chevrolet Spark</option><option value='Chevrolet Prisma'>Chevrolet Prisma</option>";
  }
  if (seleccionado === "Volkswagen") {
    modelo.innerHTML =
      "<option value=''>Seleccione</option><option value='Volkswagen Polo'>Volkswagen Polo</option><option value='Volkswagen Golf'>Volkswagen Golf</option>";
  }
  if (seleccionado === "") {
    modelo.innerHTML = "<option value=''>Seleccione</option>";
  }
});

const form = document.querySelector("#enviarForm");

form.addEventListener("submit", enviarForm);

function enviarForm() {

  let error = {};

  const id = generateUUID();
  const name = document.querySelector("#name").value.toLowerCase();
  const rut = document.querySelector("#rut").value.toLowerCase();
  const patente = document.querySelector("#patente").value.toLowerCase();
  const marca = document.querySelector("#marca").value.toLowerCase();
  const modelo = document.querySelector("#modelo").value.toLowerCase();
  const color = document.querySelector("#color").value.toLowerCase();

  //validaciones
  if (name.trim().length < 3 || name.trim().length > 50) {
    error.name = "El nombre debe tener min 3 y max 50 caracteres";

    alert(error.name);

    return;
  }

  if (patente.trim().length < 3 || patente.trim().length > 50) {
    error.patente = "El nombre debe tener min 3 y max 50 caracteres";

    alert(error.patente);

    return;
  }

  if (!validateRut(rut)) {
    error.rut = "El rut es invalido, formato: XXXXXXXX-X";
    alert(error.rut);

    return;
  }
  //fin validaciones del formulario

  let form = { id, name, rut, patente, marca, modelo, color };

  let recoveredData = localStorage.getItem("formulario");

  if (!recoveredData) {
    localStorage.setItem("formulario", JSON.stringify([form]));
  } else {
    let data = JSON.parse(recoveredData);
    //debugger
    data.push(form);
    localStorage.setItem("formulario", JSON.stringify(data));
  }

  alert("Sus datos han sido enviados correctamente");
}

function generateUUID() {
  var d = new Date().getTime();
  var uuid = "xx4xxyx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

function validateRut(rut) {
  var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == "K") digv = "k";
      return Fn.dv(rut) == digv;
    },
    dv: function (T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  // Uso de la función
  return Fn.validaRut(rut) ? true : false;
}

