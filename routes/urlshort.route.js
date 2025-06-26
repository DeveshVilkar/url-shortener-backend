const express = require('express');
const router = express.Router();
const { shortUrl, getLongurl } = require('../controller/url.controller.js');


router.post("/shorturl", shortUrl);
router.get("/getlongurl/:shortUrl", getLongurl);

module.exports = router;

