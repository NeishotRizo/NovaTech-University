const tabla = document.getElementById("tablaEstudiantes");
const btnBuscar = document.getElementById("btnBuscar");
const filtroCarrera = document.getElementById("filtroCarrera");

function cargarEstudiantes(url){

    tabla.innerHTML = "";

    fetch(url)

    .then((respuesta)=>respuesta.json())

    .then((datos)=>{

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

    });

}

// Al abrir la página muestra todos
cargarEstudiantes("http://localhost:3000/estudiantes");

// Cuando se presiona Buscar
btnBuscar.addEventListener("click", ()=>{

    const carrera = filtroCarrera.value;

    if(carrera === ""){

        cargarEstudiantes("http://localhost:3000/estudiantes");

    }else{

        cargarEstudiantes(
            `http://localhost:3000/estudiantes/carrera/${carrera}`
        );

    }

});

