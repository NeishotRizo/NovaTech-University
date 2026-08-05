const express = require("express");

const router = express.Router();

const estudianteController = require("../controllers/estudianteController");

router.post("/registro", estudianteController.registrarEstudiante);

router.get("/estudiantes", estudianteController.obtenerEstudiantes);

module.exports = router;