const PDFDocument = require("pdfkit");
const path = require("path");

const generarPDF = (req, res) => {

    const datos = req.body;

    const doc = new PDFDocument({

        margin:50

    });

    res.setHeader("Content-Type","application/pdf");

    res.setHeader(

        "Content-Disposition",

        "inline; filename=ReciboPago.pdf"

    );

    doc.pipe(res);

   doc.image(path.join(__dirname, "../img/logo.png"), 230, 20, {
        width: 130
    });

    doc.moveDown(3);

    // ENCABEZADO

    doc
    .fontSize(26)
    .fillColor("#F47C20")
    .text("VolcaTech University",{

        align:"center"

    });

    doc
    .moveDown(0.5);

    doc
    .fontSize(18)
    .fillColor("black")
    .text("RECIBO OFICIAL DE PAGO",{

        align:"center"

    });

    doc.moveDown();

    doc
    .moveTo(50,120)
    .lineTo(550,120)
    .stroke();

    // INFORMACIÓN

    doc.moveDown();

    doc.fontSize(13);

    doc.text(`Alumno: ${datos.nombre}`);

    doc.text(`Carrera: ${datos.carrera}`);

    doc.text(`Motivo: Examen de Admisión`);

    doc.text(`Método de pago: ${datos.metodoPago}`);

    doc.text(`Monto pagado: $850 MXN`);

    doc.text(`Fecha del pago: ${new Date().toLocaleDateString()}`);

    doc.text(`Hora del pago: ${new Date().toLocaleTimeString()}`);

    doc.moveDown();

    doc.fontSize(15);

    doc.fillColor("#F47C20");

    doc.text("Información del examen");

    doc.fillColor("black");

    doc.moveDown(0.5);

    doc.fontSize(13);

    doc.text("Lugar: Campus Central");

    doc.text("Edificio: Ingeniería");

    doc.text("Salón: Laboratorio A");

    doc.text("Fecha del examen: 15 de Agosto de 2026");

    doc.text("Hora del examen: 08:00 AM");

    doc.moveDown(2);

    doc
    .moveTo(50,430)
    .lineTo(550,430)
    .stroke();

    doc.moveDown();

    doc
    .fontSize(11)
    .text(

        "Este comprobante deberá presentarse el día del examen para poder ingresar al campus.",

        {

            align:"justify"

        }

    );

    doc.moveDown();

    doc
    .fontSize(12)
    .fillColor("#F47C20")
    .text(

        "Gracias por elegir VolcaTech University.",

        {

            align:"center"

        }

    );

    doc.moveDown();

    doc.fontSize(11);

    doc.fillColor("black");

    doc.text("Dirección: Av. Universidad #1000, Aguascalientes, México");

    doc.text("Teléfono: (449) 123-4567");

    doc.text("Correo: admisiones@volcatech.edu.mx");

    doc.end();

};

module.exports={

    generarPDF

};