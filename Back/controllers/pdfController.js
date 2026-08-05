const PDFDocument = require("pdfkit");

const generarPDF = (req, res) => {

    const datos = req.body;

    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
        "Content-Disposition",
        "inline; filename=recibo.pdf"
    );

    doc.pipe(res);

    doc.fontSize(24).text("NovaTech University", {
        align: "center"
    });

    doc.moveDown();

    doc.fontSize(18).text("Recibo de Pago");

    doc.moveDown();

    doc.fontSize(12);

    doc.text(`Nombre: ${datos.nombre}`);

    doc.text(`Carrera: ${datos.carrera}`);

    doc.text(`Metodo de pago: ${datos.metodoPago}`);

    doc.text(`Total: $850 MXN`);

    doc.text(`Fecha: ${new Date().toLocaleDateString()}`);

    doc.text(`Hora: ${new Date().toLocaleTimeString()}`);

    doc.moveDown();

    doc.text("Lugar del examen:");

    doc.text("Campus Central");

    doc.text("08:00 AM");

    doc.text("15 de Agosto de 2026");

    doc.end();

};

module.exports = {
    generarPDF
};