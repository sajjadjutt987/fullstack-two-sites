const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/db-test", (req, res) => {
  res.json({
    success: true,
    message: "DB connected",
    dbName: mongoose.connection.name,
    readyState: mongoose.connection.readyState,
  });
});

module.exports = { dbTestRouter: router };