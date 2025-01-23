const { AirplaneController } = require("@controllers");
const airplaneController = new AirplaneController();
const router = require("express").Router();

router.post("/", airplaneController.create);

module.exports = router;
