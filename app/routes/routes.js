const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let ip = req.ip;
    let ipDetails = req.socket.address();
    console.log(req.headers);
    console.log(req.socket.address());
    res.send(ipDetails);
});

module.exports = router;
