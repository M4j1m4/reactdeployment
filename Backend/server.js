const express = require('express');
const mysql = require('mysql')
const cors = require('cors')


const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: 'group_info'
})

app.get('/', (re, res)=> {
    return res.json("From backend side");
})

app.get('/khen',(req, res)=> {
    const sql = "SELECT * FROM khen";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8080, ()=> {
    console.log("listening");
})