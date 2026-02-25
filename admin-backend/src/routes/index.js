const express = require("express");
const { dbTestRouter } = require("./dbTest.routes");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.json({ success: true, message: "Admin API v1" });
});

apiRouter.use(dbTestRouter);

module.exports = { apiRouter };