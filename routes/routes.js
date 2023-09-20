const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const shortid = require("shortid");

// Route to short URL
router.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  try {
    let url = await URL.findOne({ originalUrl });

    if (url) {
      res.json({ shortUrl: url.shortUrl });
    } else {
      const shortUrl = shortid.generate();
      newUrl = new URL({ originalUrl, shortUrl });
      await newUrl.save();
      res.json({ shortUrl });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error shortening URL" });
  }
});

// Route to shortened URLs
router.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await URL.findOne({ shortUrl });

    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json("No URL found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error redirecting" });
  }
});

module.exports = router;
