const tabla = document.getElementById("tablaEstudiantes");
const btnBuscar = document.getElementById("btnBuscar");
const filtroCarrera = document.getElementById("filtroCarrera");

function cargarEstudiantes(url){

        tabla.innerHTML = "";

        fetch(url)

        .then((respuesta)=>respuesta.json())

        .then((datos)=>{

            if(datos.length===0){

                tabla.innerHTML=`

                    <tr>

                        <td colspan="6" class="text-center">

                            No se encontraron estudiantes.

                        </td>

                    </tr>

                `;

                return;

            }else{

                datos.forEach((estudiante)=>{

                    tabla.innerHTML += `

                    <tr>

                        <td>${estudiante.id}</td>
                        <td>${estudiante.nombre}</td>
                        <td>${estudiante.preparatoria}</td>
                        <td>${estudiante.promedio}</td>
                        <td>${estudiante.carrera}</td>
                        <td>${estudiante.sexo}</td>

                    </tr>

                    `;

                });
            }

            

        }).catch((error)=>{

            console.error(error);

            Swal.fire({

                icon:"error",

                title:"Error",

                text:"No fue posible cargar los estudiantes.",

                confirmButtonColor:"#F47C20"

            });

        });

}

// Al abrir la página muestra todos
cargarEstudiantes("/estudiantes");

// Cuando se presiona Buscar
btnBuscar.addEventListener("click", ()=>{

    const carrera = filtroCarrera.value;

    if(carrera === ""){

        cargarEstudiantes("/estudiantes");

    }else{

        cargarEstudiantes(
            `/estudiantes/carrera/${carrera}`
        );

    }

});

