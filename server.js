const express =  require('express')
const bodyParser = require('body-parser');
const db = require('./database/index')

const app = express()
require('dotenv').config()

app.use(bodyParser.json({ extended: true}))
const port = 8080
const {NAME} = process.env

db.mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
})