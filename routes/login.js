var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', message: "Login Page" });
});

/* POST login page */
// router.post('/', function(req, res, next) {
//     let loginResult = await checkLoginDetails(req.body.username, req.body.password);
//     if (loginResult) {
//         connected = true;
//         res.send(`Hello World από την Πανεπιστημίου 39! - ${req.body.username} - ${req.body.password}, result = ${loginResult}`);
//     } else {
//         res.send("Get out of here!");
//     }
// });

module.exports = router;