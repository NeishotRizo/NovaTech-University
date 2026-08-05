const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const usuario = document.getElementById("usuario").value;

    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {

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

        alert(datos.mensaje);

        window.location.href = "admin.html";

    })

    .catch((error) => {

        alert(error.message);

    });

});