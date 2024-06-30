function errorHandler(err, req, res, next) {
  let messageReturn = err.message || "Internal Server Error";
  let statusCode = err.code || 500;

  if (statusCode === 400) {
    messageReturn = messageReturn || "Bad Request";
  } else if (statusCode === 403) {
    messageReturn = messageReturn || "Forbidden";
  } else if (statusCode === 404) {
    messageReturn = messageReturn || "Not Found";
  } else if (statusCode === 500) {
    messageReturn = messageReturn || "Internal Server Error";
  }

  res.status(statusCode).json({ message: messageReturn });
}

module.exports = errorHandler;
