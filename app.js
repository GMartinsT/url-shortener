const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("URL shortener with Node.js and Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
