const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require ("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "app_licores"
});

app.get("/licores", (req,res)=>{
    db.query('SELECT * FROM licores',
    (err,result) => {
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.listen(3005, () =>{
    console.log("Corriendo en el puerto 3005")
})