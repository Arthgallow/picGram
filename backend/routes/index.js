const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/hello/world', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World! Your Mom is so fat!');
});
router.get('/pizza', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Pizza is the best!');
});

module.exports = router;
