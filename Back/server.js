require("dotenv").config();

const express = require("express");
const cors = require("cors");

//Importar Rutas
const estudianteRoutes = require("./routes/estudianteRoutes");
const authRoutes = require("./routes/authRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
const contactoRoutes = require("./routes/contactoRoutes");

const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());

//Uses de Rutas
app.use("/",estudianteRoutes);
app.use("/", authRoutes);
app.use("/", pdfRoutes);
app.use("/", contactoRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});