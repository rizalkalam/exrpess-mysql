const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const sql = "SELECT * FROM barangs"
    db.query(sql, (error, result)=>{
        //hasil dari mysql
        response(200, result, "get all data form barangs", res)
    })
})

app.get('/find', (req,res)=>{
    const sql = `SELECT nama_barang FROM barangs WHERE id = ${req.query.id}`
    db.query(sql,(error, result)=>{
        response(200, result, "find barang id", res)
    })
})

app.post('/login', (req,res)=>{
       console.log({requestFromOutside: req.body})
        res.send('login berhasil')
})

app.put('/username', (req,res)=>{
    console.log({updateData: req.body})
    res.send('update berhasil')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})