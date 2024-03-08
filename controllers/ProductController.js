const Product = require('../models/Product');

exports.All = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        if (products) {
            return res.status(200).json({
                status: true,
                data: products
            });
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.Store = async (req, req, next) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const qty = req.body.qty;
        
        
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}