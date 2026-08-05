const db = require("../config/database");

const login = (usuario, password, callback) => {

    const sql = `
        SELECT * FROM admin
        WHERE usuario = ? AND password = ?
    `;

    db.query(sql, [usuario, password], callback);

};

module.exports = {
    login
};