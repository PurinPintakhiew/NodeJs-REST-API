const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');

class CartController {
    async getAll(req, res, next) {
        try {
            const carts = await Cart.findAll({
                include: [
                    CartItem,
                ]
            });
            if (carts) {
                return res.status(200).json({
                    status: true,
                    data: carts
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

            const cart = await Cart.findOne({ where: { id: id } });
            if (cart) {
                return res.status(200).json({
                    status: true,
                    data: cart
                });
            } else {
                return res.status(404).json({
                    status: true,
                    data: cart,
                    message: 'data is not found'
                });
            }
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

module.exports = new CartController;