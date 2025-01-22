const { info } = require("@controllers");

const router = require("express").Router();

router.get("/info", info);

module.exports = router;
