const adminModel = require("../models/adminModel");

const login = (req, res) => {

    const { usuario, password } = req.body;

    adminModel.login(usuario, password, (error, resultados) => {

        if(error){

            return res.status(500).json({
                mensaje:"Error del servidor"
            });

        }

        if(resultados.length==0){

            return res.status(401).json({
                mensaje:"Credenciales incorrectas"
            });

        }

        res.json({
            mensaje:"Login correcto"
        });

    });

};

module.exports = {
    login
};