const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
require('dotenv').config()

app.use(cors());

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_database = process.env.DB_NAME;
const db_port = process.env.DB_PORT;


const db = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
    port:db_port
})

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.get('/users', (req, res) => {
   const sql = "Select * FROM User";
   db.query(sql,(err,data)=>{
       if(err) return res.json(err);
       return res.json(data);
   })
});


app.listen(port, () => {
    console.log(`Le serveur Express écoute sur le port ${port}`);
});