const express = require('express');
const router = express.Router();

router.get('/courses', function (req, res){
    res.send([1, 2, 3, 4, 5]);
});

router.get('/courses/:id', function (req, res){
    res.send(req.params.id + " is Data Science.");
});

router.get('/posts/:year/:month', function (req, res){
    res.send(req.params);
});

// /api/query?id=1&name=Peerasak
router.get('/query', function (req, res){
    res.send(req.query);
});

module.exports = router;