const URL = require('../models/Url.js');
const { customAlphabet } = require('nanoid');


const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 8);


exports.shortUrl = async (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl || !longUrl.startsWith('http')) {
        return res.status(400).json({ message: "Invalid Url" });
    }

    try {
        const existing = await URL.findOne({ longUrl })
        const base_url=process.env.BASE_URL
        if (existing) {
            return res.json({ shortUrl: `${base_url}/api/${existing.shortUrl}` });
        }
        const shortUrl = nanoid();
        const newUrl = await URL.create({ shortUrl, longUrl })
        res.json({ shortUrl: `${base_url}/api/${newUrl.shortUrl}` });
    } catch (error) {
        res.status(500).json({ message: 'Server error',error });
    }

}

exports.getLongurl = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const url = await URL.findOne({ shortUrl });
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
}