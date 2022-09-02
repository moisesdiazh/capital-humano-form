    const selectElement = document.querySelector('#marca');
    const modelo = document.querySelector('#modelo')
    
    selectElement.addEventListener('change', (event) => {
    const seleccionado = event.target.value;

    
    if (seleccionado === 'renault') {
        modelo.innerHTML = "<option value='A'>A</option>";
        modelo.innerHTML = "<option value='A'>B</option>";
    }

    if (seleccionado === 'toyota') {
        
        
    }
    if (seleccionado === 'ford') {
        
    }
    if (seleccionado === 'chevrolet') {
        
    }
    if (seleccionado === 'volkswagen') {
        
        
    }
    if (seleccionado === 'seleccione'){
        
    }
    });


    

    forms.forEach((data)=> {
        console.log(data.name);
        tableName.innerHTML = data.name;
        tableRut.innerHTML = data.rut;
        tablePatente.innerHTML = data.patente;
        tableMarca.innerHTML = data.marca;
        tableModelo.innerHTML = data.modelo;
        tableColor.innerHTML = data.color;
        tableDelete.innerHTML = '<img style="margin-left:20px;" src="img/delete.png">';

    });