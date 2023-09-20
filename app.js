const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

// Import database config
require("./db/db");

// Config to JSON
app.use(express.json());

// Import routes
const urlRoutes = require("./routes/routes");
app.use("/urls", urlRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
