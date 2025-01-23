const { loggerConfig } = require("../config");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create = async (data) => {
    try {
      console.log(this.model)
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log(error);
      loggerConfig.logger.error(
        `Something went wrong in creating data for this model ${this.model}`,
        error
      );
      return error;
    }
  };

  destroy = async (data) => {
    try {
      const response = await this.model.destroy({
        where: data,
      });
      return response;
    } catch (error) {
      console.log(error);
      loggerConfig.logger.error(
        `Something went wrong in deleting data for this model ${this.model}`,
        error
      );
      return error;
    }
  };

  get = async (data) => {
    try {
      const response = await this.model.findOne(data);
      return response;
    } catch (error) {
      console.log(error);
      loggerConfig.logger.error(
        `Something went wrong in getting data for this model ${this.model}`,
        error
      );
      return error;
    }
  };

  getAll = async () => {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log(error);
      loggerConfig.logger.error(
        `Something went wrong in getting All data for this model ${this.model}`,
        error
      );
      return error;
    }
  };

  update = async (id, data) => {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      loggerConfig.logger.error(
        `Something went wrong in updating data for this model ${this.model}`,
        error
      );
      return error;
    }
  };
}

module.exports = BaseRepository;
