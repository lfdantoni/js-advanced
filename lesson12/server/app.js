const express = require('express')
const cors = require('cors');
require('dotenv').config()

const app = express()

app.use(cors({
  origin: '*'
}));

app.get('/', function (req, res) {
  res.send('Hello World' + process.env.MY_ENV_VAR)
})

app.listen(3000, () => {
  console.log('lister on port', 3000)
})
