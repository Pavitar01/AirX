require("module-alias/register");

const { serverConfig,loggerConfig } = require("./config");
const express = require("express");
const app = express();
const routes = require("@routes");

app.use(express.json());

app.use("/api", routes);

app.listen(serverConfig.PORT, () => {
  console.log(`server is running on port ${serverConfig.PORT}`);
  loggerConfig.logger.info(`server is running on port ${serverConfig.PORT}`);
});
