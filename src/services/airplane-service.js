const { AirplaneRepository } = require("../repositories");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  create = async (data) => {
    return await this.airplaneRepository.create(data);
  };

  update = async (id, data) => {
    return await this.airplaneRepository.update(id, data);
  };

  delete = async (id) => {
    return await this.airplaneRepository.destroy(id);
  };

  getAll = async () => {
    return await this.airplaneRepository.getAll();
  };

  get = async (id) => {
    return await this.airplaneRepository.get(id);
  };
}

module.exports = AirplaneService;
