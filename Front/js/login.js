const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const usuario = document.getElementById("usuario").value;

    const password = document.getElementById("password").value;

    fetch("/login", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            usuario,

            password

        })

    })

    .then((respuesta) => {

        if (!respuesta.ok) {

            throw new Error("Credenciales incorrectas");

        }

        return respuesta.json();

    })

    .then((datos) => {

        Swal.fire({

            icon:"success",

            title:"Bienvenido",

            text:datos.mensaje,

            confirmButtonColor:"#F47C20"

        }).then(()=>{

            window.location.href="admin.html";

        });

        window.location.href = "admin.html";

    })

    .catch((error) => {

        Swal.fire({

            icon:"error",

            title:"Error",

            text:"Usuario o contraseña incorrectos.",

            confirmButtonColor:"#F47C20"

        });

    });

});