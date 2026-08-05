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
    fetch("/registro", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },
        
        //literal aqui mandamos lo que sea que queramos mandar
        body: JSON.stringify(estudiante)

    })
    .then((respuesta) => respuesta.json())
    .then((datos) => {

        Swal.fire({

            icon: "success",

            title: "¡Registro exitoso!",

            text: "Ahora procederás al pago del examen de admisión.",

            confirmButtonText: "Continuar al pago",

            confirmButtonColor: "#F47C20",

            allowOutsideClick: false,

            allowEscapeKey: false

        }).then(() => {

            formulario.reset();

            window.location.href = "pago.html";

        });

    })
    .catch((error) => {

        console.log(error);

    });


});

