const { Sequelize } = require("sequelize");

if (!process.env.NODE_ENV) {
    console.log("NODE_ENV is not defined.");
    process.exit(128);
}
const config = require("./db-config")[process.env.NODE_ENV];
const sequelize = new Sequelize(config);

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    sequelize,
    checkConnection,
};