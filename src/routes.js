const express = require('express')
const routes = express.Router()
//const Product = require('./models/Product')
const ProductController = require('./controller/ProductController')


routes.get("/products",ProductController.findAll)

routes.post("/products",ProductController.store)

routes.get("/product/:id",ProductController.show)

routes.put("/product/:id",ProductController.update)

routes.delete("/product/:id",ProductController.destroy)


module.exports = routes