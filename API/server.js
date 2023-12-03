const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "app_database",
    port: 3002
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