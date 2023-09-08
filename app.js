// Importación de librerias
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const app = express()

const port = 300;

//MiddleWares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json()) //Para que el servidor pueda comprender datos JSON

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/user', (req, res) => {
    //Recibir datos por body

     const {name,lastname,id} = req.body
    //  res.send(`Bienvenido ${name} ${lastname}`)
    res.send({
       name,
       lastname,
       id
    })

  })

app.listen(port, () =>(`Servidor en http://localhost:${port}`))