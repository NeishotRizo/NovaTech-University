const estudianteModel = require("../models/estudianteModel");

const registrarEstudiante = (req, res) => {

    estudianteModel.registrarEstudiante(req.body, (error, resultado) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al registrar estudiante",
                error: error
            });
        }

        res.status(201).json({
            mensaje: "Estudiante registrado correctamente"
        });

    });

};

const obtenerEstudiantes = (req, res) => {

    estudianteModel.obtenerEstudiantes((error, resultados) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al obtener estudiantes"
            });
        }

        res.json(resultados);

    });

};

module.exports = {
    registrarEstudiante,
    obtenerEstudiantes
};