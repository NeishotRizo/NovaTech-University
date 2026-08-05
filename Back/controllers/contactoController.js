const nodemailer = require("nodemailer");

const enviarCorreo = async (req, res) => {

    const { nombre, correo, asunto, mensaje } = req.body;

    try {

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.EMAIL_USER,

                pass: process.env.EMAIL_PASS

            }

        });

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: correo,

            subject: asunto,

            html: `
                <h2>Hola ${nombre}</h2>

                <p>Hemos recibido tu mensaje.</p>

                <p>Próximamente un asesor de NovaTech University se pondrá en contacto contigo.</p>

                <p><b>Mensaje recibido:</b></p>

                <p>${mensaje}</p>
            `

        });

        res.json({

            mensaje: "Correo enviado correctamente"

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            mensaje: "No fue posible enviar el correo"

        });

    }

};

module.exports = {

    enviarCorreo

};