const btnPDF = document.getElementById("btnPDF");

btnPDF.addEventListener("click", () => {

    const datos = {

        nombre: document.getElementById("nombre").value.trim(),

        carrera: document.getElementById("carrera").value,

        metodoPago: document.getElementById("metodoPago").value

    };

    if(datos.nombre===""){

        Swal.fire({

            icon:"warning",

            title:"Campos incompletos",

            text:"Completa toda la información.",

            confirmButtonColor:"#F47C20"

        });

        return;

    }

    fetch("http://localhost:3000/pdf", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(datos)

    })

    .then((respuesta) => respuesta.blob())

     .then((pdf) => {

        Swal.fire({

            icon:"success",

            title:"Comprobante generado",

            text:"Tu comprobante se abrirá en una nueva pestaña.",

            confirmButtonColor:"#F47C20"

        }).then(() => {

            const url = window.URL.createObjectURL(pdf);

            window.open(url, "_blank");

        });

    })

    .catch((error) => {

        console.error(error);

        Swal.fire({

            icon:"error",

            title:"Error",

            text:"No fue posible generar el comprobante.",

            confirmButtonColor:"#F47C20"

        });

    });

});