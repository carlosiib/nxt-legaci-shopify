const express = require('express')
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const app = express()

const PORT = process.env.PORT || 5000;

/**
 * execute -> npm start
 */

// TODO: config CORS to only accept request from store URL
app.use(cors({
  origin: "*"
}))

app.get('/', (req, res) => {
  return res.json({ foo: "foo" })
})

app.get('/users/:id', (req, res) => {
  return res.json({ message: "GET USER" })
})

app.delete('/users/:id', (req, res) => {
  return res.json({ message: "DELETE USER" })
})


app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`)
})