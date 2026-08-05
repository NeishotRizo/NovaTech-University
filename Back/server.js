require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});