const express = require('express');
var router = express.Router();

function parseLanguage(acceptLanguage) {
    return acceptLanguage.split(",")[0];
}

function parseUserAgent(userAgent) {
    let leftParanthese = userAgent.indexOf('(');
    let rightParanthese = userAgent.indexOf(')');
    return userAgent.split("").slice(leftParanthese + 1, rightParanthese).join("");
}

router.get('/', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.ip;
    let language = parseLanguage(req.headers["accept-language"]);
    let software = parseUserAgent(req.headers["user-agent"]);
    let result = {
        "ipaddress": ip,
        "language": language,
        "software": software
    };
    res.json(result);
});

module.exports = router;
