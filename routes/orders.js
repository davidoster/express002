const db = require('../models/index'); // equivalent mysql
const TestOrder = db.sequelize.models.TestOrder; // Model TestOrder
const TestCustomer = db.sequelize.models.TestCustomer;
const TestProduct = db.sequelize.models.TestProduct;
var express = require('express');
var router = express.Router();

/* GET home page. */
// http://localhost:4000/orders
router.get('/', async function (req, res, next) {
    let orders = await TestOrder.findAll({ attributes: ['id', 'customerId', 'productId', 'quantity', 'totalPrice'] });
    let ordersDTO = [];
    for(let element of orders){
        let customer = await TestCustomer.findByPk(element.customerId, { attributes: ['firstName', 'lastName'] });
        let customerName = customer.firstName + " " + customer.lastName;
        let product = await TestProduct.findByPk(element.productId, { attributes: ['name']});
        ordersDTO.push({
            id: element.id, 
            customer: { 
                id: element.customerId, 
                name: customerName
            },
            product: {
                id: element.productId,
                name: product.name
            },
            quantity: element.quantity,
            totalPrice: element.totalPrice
        });    
    };
    res.render('orders/list', {
        title: 'Express 002 - Orders Page',
        message: "Orders",
        list: ordersDTO
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