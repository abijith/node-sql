const express = require('express');
const mysql = require('mysql');
const app = express();

//Connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    schema : "nodedb"
});
  
connection.connect((error) => {
    if (error) {
        throw error;
    }
    else {
        console.log("SQL Connected!");
    }
});



var jsonData = [];
connection.query("SELECT * FROM nodedb.customers;", (error, results, fields) => {
    if(error) {
        throw error;
        console.log('Error in query');
    }
    else {
        console.log('Success in query');
        jsonData = results;
    }
});

// connection.end();

//Routing
app.use('/', (req, res, next) => {
    res.status(200).json({
        data : jsonData,
        status : "success"
    });
    res.status(404).json({
        data : jsonData,
        status : "error"
    });
})

module.exports = app;