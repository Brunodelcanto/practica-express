// Importación de librerias
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('ejs');
require('dotenv').config();

const app = express()

const port = process.env.PORT || 300;

//MiddleWares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json()) //Para que el servidor pueda comprender datos JSON

//Archivos estaticos

app.use (express.static(path.join(__dirname, 'public')))

//Motor de plantillas
app.set('view engine', 'ejs')

//Rutas
app.use(require('./routes/blog.routes'))
app.use(require('./routes/user.routes'))


app.listen(port, () =>(`Servidor en http://localhost:${port}`))