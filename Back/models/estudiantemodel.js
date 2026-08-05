const db = require("../config/database");

const registrarEstudiante = (estudiante, callback) => {

    const sql = `
        INSERT INTO estudiantes
        (nombre, preparatoria, fechaNacimiento, promedio, carrera, sexo)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            estudiante.nombre,
            estudiante.preparatoria,
            estudiante.fechaNacimiento,
            estudiante.promedio,
            estudiante.carrera,
            estudiante.sexo
        ],
        callback
    );
};

const obtenerEstudiantes = (callback) => {

    const sql = "SELECT * FROM estudiantes";

    db.query(sql, callback);

};

const obtenerPorCarrera = (carrera, callback) => {

    const sql = `
        SELECT *
        FROM estudiantes
        WHERE carrera = ?
        ORDER BY promedio DESC
    `;

    db.query(sql, [carrera], callback);

};

module.exports = {
    registrarEstudiante,
    obtenerEstudiantes,
    obtenerPorCarrera
};