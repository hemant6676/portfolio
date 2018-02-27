const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Portfolio',
    message: 'COMP-2106 in class node application'
  });
});
router.get('/one', function(req, res, next) {
    res.render('one', {
        title: 'Portfolio',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/rama', function(req, res, next) {
    res.render('rama', {
        title: 'Portfolio',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/two', function(req, res, next) {
    res.render('two', {
        title: 'Portfolio',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', {
        title: 'Portfolio',
        message: 'COMP-2106 in class node application'
    });
});


// // GET: /about
// router.get('/about', function(req, res, next) {
//     // load the about view
//     res.render('about', {
//       title: 'About car tracker',
//       message: 'this app is built with the mean stack.'
//     });
// });
module.exports = router;






















