require("module-alias/register");

const { serverConfig, dbConnection } = require("./config");
const { checkConnection } = dbConnection
const express = require("express");
const app = express();
const routes = require("@routes");

app.use(express.json());
express.urlencoded({ extended: true });

app.use("/api", routes);


if (process.env.NODE_ENV !== "test") {
  checkConnection()
    .then(() => {
      app.listen(serverConfig.PORT, () => {
        const NODE_ENV = process.env.NODE_ENV;
        console.log(`${NODE_ENV} Server is listening on port ${serverConfig.PORT}`);
      });
    }).catch(err => {
      console.error('Unable to connect to the database:', err);
      console.error('Cancelling app server launch');
    });
}