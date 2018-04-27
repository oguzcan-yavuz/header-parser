const express = require('express');
var router = express.Router();

router.get('/', urlencodedParser, (req, res) => {
    console.log(req.headers);
    console.log(req.connection.remoteAddress);
    res.send(req.connection.remoteAddress);
});

module.exports = router;
