const express = require("express")
const router = express.Router()
const {addProductController} = require("../controllers/other.controller")

router.get('/agregar', addProductController)

module.exports={
    routerOther: router
}