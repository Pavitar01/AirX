const { info } = require("@controllers");
const router = require("express").Router();
const airplaneRouter = require("./airplane-route");

router.get("/info", info);
router.use("/airplane", airplaneRouter);

module.exports = router;
