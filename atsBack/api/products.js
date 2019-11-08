var express = require('express');
const Product = require('../models/products');
const mongoose = require("mongoose");


exports.getProducts = async (req, res, next) => {
    var num = req.params.num;
    const resParPage = 20;
    const listProducts = await Product.find().skip((resParPage * num) - resParPage).limit(resParPage).then(async resListProds => {
        const numOfUsers = await Product.count();
        return res.json({
            status: "success",
            currentPage: num,
            pages: Math.ceil(numOfUsers / resParPage),
            data: resListProds
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.getProduct = (req , res , next) => {
    Product.findById(req.params.id).exec(function (err , product){
        if (err){
            res.status(400).send(err);
        }else{
            return res.json({status:"success" , product:product})
        }
    })
};
