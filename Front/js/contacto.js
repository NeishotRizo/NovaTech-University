const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    const datos={

        nombre:document.getElementById("nombre").value.trim(),

        correo:document.getElementById("correo").value.trim(),

        asunto:document.getElementById("asunto").value.trim(),

        mensaje:document.getElementById("mensaje").value.trim()

    };

    fetch("http://localhost:3000/contacto",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(datos)

    })

    .then((respuesta)=>respuesta.json())

    .then((datos)=>{

        Swal.fire({

            icon:"success",

            title:"Mensaje enviado",

            text:datos.mensaje,

            confirmButtonColor:"#F47C20"

        });

        formulario.reset();

    })

    .catch((error)=>{

        console.error(error);

        Swal.fire({

            icon:"error",

            title:"Error",

            text:"No fue posible enviar el mensaje.",

            confirmButtonColor:"#F47C20"

        });

    });

});