const formulario = document.getElementById('formRegistro');


//Tomamos los datos del formulario
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;

    const preparatoria = document.getElementById("preparatoria").value;

    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    const promedio = document.getElementById("promedio").value;

    const carrera = document.getElementById("carrera").value;

    const sexo = document.getElementById("sexo").value;

    //Los guardamos en un objeto sin necesidad de nombre: nombre por que se llaman igual
    const estudiante ={
    
        nombre,
        preparatoria,
        fechaNacimiento,
        promedio,
        carrera,
        sexo

    };



    console.log(estudiante);

    //Hacemos fetch con nuestro objeto estudiante para mandarlo al backend
    fetch("http://localhost:3000/registro", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },
        
        //literal aqui mandamos lo que sea que queramos mandar
        body: JSON.stringify(estudiante)

    })
    .then((respuesta) => respuesta.json())
    .then((datos) => {

        alert(datos.mensaje);
        formulario.reset();

    })
    .catch((error) => {

        console.log(error);

    });


});

