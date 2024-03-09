const Product = require('../models/Product');

class ProductController {
    async getAll(req, res, next) {
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

    async show(req, res, next) {
        try {
            const id = req.params.id;

            const products = await Product.findOne({ where: { id: id } });
            if (products) {
                return res.status(200).json({
                    status: true,
                    data: products
                });
            } else {
                return res.status(404).json({
                    status: true,
                    data: products,
                    message: 'data is not found'
                });
            }
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async store(req, res, next) {
        try {
            const name = req.body.name;
            const price = req.body.price;
            const qty = req.body.qty;

            const newProduct = await Product.create({ name: name, price: price, qty: qty });
            if (newProduct) {
                return res.status(200).json({
                    status: true,
                    message: 'Store successful',
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Store fail',
                });
            }

        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const price = req.body.price;
            const qty = req.body.qty;

            const [updatedRows] = await Product.update({ name: name, price: price, qty: qty }, { where: { id } });
            if (updatedRows > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Update successful',
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Update fail',
                });
            }

        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async destroy(req, res, next) {
        try {
            const id = req.params.id;
            const destroyedRows = await Product.destroy({ where: { id } });

            if (destroyedRows > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Destroy successful',
                });
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'Destroy fail',
                });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

module.exports = new ProductController();