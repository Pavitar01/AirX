const { StatusCodes } = require("http-status-codes");

const info = (_, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "server is running",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
