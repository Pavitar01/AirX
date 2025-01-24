const { loggerConfig } = require("../config");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create = async (data) => {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  destroy = async (data) => {
    try {
      const response = await this.model.destroy({
        where: data,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  get = async (data) => {
    try {
      const response = await this.model.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      throw error;
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
      throw error;
    }
  };
}

module.exports = BaseRepository;
