const db = require('../models/index'); // equivalent mysql
const TestOrder = db.sequelize.models.TestOrder; // Model TestOrder
var express = require('express');
var router = express.Router();

/* GET home page. */
// http://localhost:4000/orders
router.get('/', async function (req, res, next) {
    let orders = await TestOrder.findAll({ attributes: ['id', 'customerId', 'productId', 'quantity', 'totalPrice'] });
    res.render('orders/list', {
        title: 'Express 002 - Orders Page',
        message: "Orders",
        list: orders
    });
});

// GET create
router.get('/create', (req, res) => {
    res.render('orders/create-update', {
        title: 'Express 002 - New Order page',
        message: 'New Order',
        action: 'create',
        product: {}
    });
})

// POST create 
router.post('/create', async (req, res) => {
    await TestOrder.create({
        customerId: req.body.customerId,
        productId: req.body.productId,
        quantity: req.body.quantity,
        totalPrice: 0
    });
    res.redirect('/orders');
});

module.exports = router;