const btnPDF = document.getElementById("btnPDF");

btnPDF.addEventListener("click", () => {

    const datos = {

        nombre: document.getElementById("nombre").value,

        carrera: document.getElementById("carrera").value,

        metodoPago: document.getElementById("metodoPago").value

    };

    fetch("http://localhost:3000/pdf", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(datos)

    })

    .then((respuesta) => respuesta.blob())

    .then((pdf) => {

        const url = window.URL.createObjectURL(pdf);

        window.open(url);

    });

});