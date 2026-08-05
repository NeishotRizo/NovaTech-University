const express = require("express");

const router = express.Router();

const contactoController = require("../controllers/contactoController");

router.post("/contacto", contactoController.enviarCorreo);

module.exports = router;