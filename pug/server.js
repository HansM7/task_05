require('dotenv').config()

const express = require('express')
const app = express()

const {routerProduct} = require('./src/product/routes/product.router')
const {routerOther} = require('./src/Others/routes/other.router')

app.set('views', './src/views')
app.set('views engine','pug')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || 3000

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.render('index.pug')
}) 

app.use('/', routerProduct)
app.use('/', routerOther)

app.listen(3000)