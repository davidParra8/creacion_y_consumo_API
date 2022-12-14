import mysql from "promise-mysql";
import config from "./contantes";

const connection = mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD
});

const getConnection = () => { 
    return connection 
};

module.exports = { 
    getConnection
};