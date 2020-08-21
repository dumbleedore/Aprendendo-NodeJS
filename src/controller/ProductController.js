const mongoose = require('mongoose')

const Product = require('../models/Product')
const { update } = require('../models/Product')


module.exports = {
    async findAll(req,res){
        const products = await Product.find()
        return res.json(products)
    },
    async store(req,res){
        // CRIAÇÃO DE PRODUTOS
        const product = await Product.create(req.body)
        return res.json(product)
    },
    async show(req,res){
        // MONSTRANDO PRODUTOS
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },
    async update(req,res){
        // ATUALIZANDO MEUS PRODUTOS
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true})
        return res.json(product)
    },
    async destroy(req,res){
        // EXCLUINDO PELO ID
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.json(product)
    }
}