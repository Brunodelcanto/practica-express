//Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router();

router.get('/home', (req, res) => {
    res.render('home');
  })
  
  router.post('/user', (req, res) => {
      //Recibir datos por body
  
       const {name,lastname,id} = req.body
      //  res.send(`Bienvenido ${name} ${lastname}`)
      res.send({
         name,
         lastname,
         id
      })
  
    })

    module.exports = router;
  