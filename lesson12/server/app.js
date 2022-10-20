const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
  origin: '*'
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('lister on port', 3000)
})
