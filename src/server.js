const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../dev/swagger.json');
const db = require('./repository.js')
const config = require('./config.js');

config.initConfig();

const app = express()
const port = 3000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.redirect('/api-docs');
})

app.get('/cities',  async (req, res) => {
  const cities = await db.getCities();
  res.send(cities)
})

app.get('/cities/:name',  async (req, res) => {
  const cities = await db.findCity(req.params.name);
  res.send(cities)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})