const tableBody = document.querySelector("#tableBody");
const tableName = document.querySelector("#name");
const tableRut = document.querySelector("#rut");
const tablePatente = document.querySelector("#patente");
const tableMarca = document.querySelector("#marca");
const tableModelo = document.querySelector("#modelo");
const tableColor = document.querySelector("#color");
const tableDelete = document.querySelector("#eliminar");

let forms = JSON.parse(localStorage.getItem("formulario"));

const templateList = forms.map((data) => {
  return `
        <tr>
            <td id="name">${data.name}</td>
            <td id="rut">${data.rut}</td>
            <td id="patente">${data.patente}</td>
            <td id="marca">${data.marca}</td>
            <td id="modelo">${data.modelo}</td>
            <td id="color">${data.color}</td>
            <td id="eliminar">
                <input type="image" value="${data.id}" id="deleteRegister" style="margin-left:20px;" src="img/delete.png">
            </td> 
            
        </tr>
        `;
});

tableBody.innerHTML = templateList;

//document.querySelector("#deleteRegister").addEventListener("click", deleteRegistro);

deleteForm.addEventListener("click", function (e) {
  e.preventDefault();
});
