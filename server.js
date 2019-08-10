const express =  require('express')
const bodyParser = require('body-parser');
const mongoConnect = require('./database/index').mongoConnect
const router = require('./routes/index')

const app = express()

app.use(bodyParser.json({ extended: true}))
const port = process.env.PORT||5000
app.use(router, (req, res, next) => {
    next()
})


mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
})