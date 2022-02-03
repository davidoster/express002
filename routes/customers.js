var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('customers/list', 
    { 
        title: 'Express 002 - Customers page', 
        // list: getCustomers()
        list: [ {id: 1, name: 'George Pasparakis'}, 
                {id: 1, name: 'George Pasparakis'}, 
                {id: 1, name: 'George Pasparakis'}] });
});


async function getCustomers() {

}

async function dbLogin() {

}

module.exports = router;