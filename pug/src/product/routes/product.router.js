const express = require("express")
const {isId,register} = require("../middlewares/")
const {getAllController, getByIdController, registerController, editController, deleteOneController} = require("../controllers/product.controller")

const router = express.Router()

router.get('/productos', getAllController)

router.post('/producto', register, registerController)


module.exports={
    routerProduct: router
}