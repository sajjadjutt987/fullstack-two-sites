function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode && Number(err.statusCode) ? Number(err.statusCode) : 500;

  const payload = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  if (process.env.NODE_ENV !== "production") {
    payload.stack = err.stack;
  }

  res.status(statusCode).json(payload);
}

module.exports = { errorHandler };