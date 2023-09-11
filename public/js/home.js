const formGuardar = document.querySelector("#form-guardar");

formGuardar.addEventListener('submit', (e) =>{
    e.preventDefault();

    //Se capturan los datos del formulario

    const inputTitulo = document.querySelector('#titulo-post').value;
    const inputDetalle = document.querySelector('#detalle-post').value;

    //Enviar al servidor
    console.log(inputTitulo);
    console.log(inputDetalle);
})