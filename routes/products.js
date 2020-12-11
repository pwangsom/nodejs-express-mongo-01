const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async function (req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:id', async function (req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/create', async function (req, res) {
    console.log(req.body);

    const product = new Product({
        id: req.body.id,
        name: req.body.name
    });

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/:id', async function (req, res) {
    try {
        const upatedProduct = await Product.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } });
        res.json(upatedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const removedProduct = await Product.remove({ _id: req.params.id });
        res.json(removedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/create/sync', function (req, res) {
    console.log(req.body);

    const product = new Product({
        id: req.body.id,
        name: req.body.name
    });

    product.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
})

module.exports = router;