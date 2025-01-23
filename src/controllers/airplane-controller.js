const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SendResponse } = require("../utils");
const { loggerConfig } = require("../config");

class AirplaneController {
  constructor() {
    this.airplaneService = new AirplaneService();
    this.sendResponse = new SendResponse();
  }
  create = async (req, res) => {
    try {
      const response = await this.airplaneService.create(req.body);
      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "airplane created successfully",
        error: {},
        data: response,
      });
    } catch (error) {
      loggerConfig.logger.error(`Error in creating airplane`, error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "something went wrong",
        error: error,
        data: {},
      });
    }
  };
}
module.exports = AirplaneController;
