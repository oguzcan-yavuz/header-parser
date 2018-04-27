const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    console.log(req.connection.remoteAddress);
    res.send(req.connection.remoteAddress);
});

module.exports = router;
