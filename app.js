// const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const router = require('./src/routers/router')
// const browserify = require('browserify')
// const browserSync = browserify()
// browserSync.add('./app.js')
// browserSync.bundle().pipe(process.stdout)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.set("views", "./src/templates")
app.set("view engine", "hbs")

app.use('/', router)

// not found page render
app.use((req, res, next) => {
    res.status(404).render('error/404.hbs')
    // res.status(500).render('404.hbs')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port http://localhost:3000')
})