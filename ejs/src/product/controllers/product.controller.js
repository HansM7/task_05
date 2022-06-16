const Product = require('../model/index')

const product=new Product()

exports.getAllController=async (req,res)=>{
    const allData = await product.getAll()
    res.render('productos.ejs',{products:allData})
}

exports.registerController= async (req, res)=>{
    const register = await product.save(req.body)
    const allData = await product.getAll()
    res.render('productos.ejs',{products:allData})
}
