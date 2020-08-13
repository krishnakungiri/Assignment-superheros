const express = require('express')
const path = require("path");
const app = express()

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, "public", "views"));
app.set("view engine", "ejs");



app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const routes = require('./routes.js')
app.use('/', routes)

app.listen(8080, () => {
    console.log('server is listening on 8080')

})