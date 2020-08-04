const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const router = require('./src/routers/router')

const partialsPath = path.join(__dirname, './src/templates/partials')

app.use(express.static(__dirname + "/public"))
app.set("views", "./src/templates")
app.set("view engine", "hbs")
hbs.registerPartials(partialsPath)

app.use('/', router)

// not found page render
app.use((req, res, next) => {
    res.status(404).render('error/404.hbs')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port http://localhost:3000')
})