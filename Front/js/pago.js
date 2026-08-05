const btnPDF = document.getElementById("btnPDF");

const metodoPago = document.getElementById("metodoPago");

const pagoTarjeta = document.getElementById("pagoTarjeta");

const pagoOxxo = document.getElementById("pagoOxxo");

const pagoCajas = document.getElementById("pagoCajas");

function mostrarMetodoPago() {

    pagoTarjeta.classList.add("d-none");

    pagoOxxo.classList.add("d-none");

    pagoCajas.classList.add("d-none");

    if (metodoPago.value === "Tarjeta") {

        pagoTarjeta.classList.remove("d-none");

    }

    else if (metodoPago.value === "OXXO") {

        pagoOxxo.classList.remove("d-none");

    }

    else if (metodoPago.value === "Cajas Universidad") {

        pagoCajas.classList.remove("d-none");

    }

}

metodoPago.addEventListener("change", mostrarMetodoPago);

mostrarMetodoPago();

function generarPDF(datos) {

    fetch("/pdf", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(datos)

    })

    .then((respuesta) => respuesta.blob())

    .then((pdf) => {

        Swal.fire({

            icon: "success",

            title: "Comprobante generado",

            text: "Tu comprobante se abrirá en una nueva pestaña.",

            confirmButtonColor: "#F47C20"

        }).then(() => {

            const url = window.URL.createObjectURL(pdf);

            window.open(url, "_blank");

        });

    })

    .catch((error) => {

        console.error(error);

        Swal.fire({

            icon: "error",

            title: "Error",

            text: "No fue posible generar el comprobante.",

            confirmButtonColor: "#F47C20"

        });

    });

}

btnPDF.addEventListener("click", () => {

    const datos = {

        nombre: document.getElementById("nombre").value.trim(),

        carrera: document.getElementById("carrera").value,

        metodoPago: metodoPago.value

    };

    if (datos.nombre === "") {

        Swal.fire({

            icon: "warning",

            title: "Campos incompletos",

            text: "Completa toda la información.",

            confirmButtonColor: "#F47C20"

        });

        return;

    }

    if (datos.metodoPago === "Tarjeta") {

        Swal.fire({

            icon: "success",

            title: "Pago aprobado",

            text: "La transacción fue realizada exitosamente.",

            confirmButtonText: "Generar comprobante",

            confirmButtonColor: "#F47C20",

            allowOutsideClick: false

        }).then(() => {

            generarPDF(datos);

        });

    }

    else {

        generarPDF(datos);

    }

});