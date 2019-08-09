const express =  require('express')
const bodyParser = require('body-parser');
const mongoConnect = require('./database/index').mongoConnect
const router = require('./routes/index')

const app = express()
const port = 8080

app.use(bodyParser.json({ extended: true}))
app.use(router, (req, res, next) => {
    next()
})


mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
})