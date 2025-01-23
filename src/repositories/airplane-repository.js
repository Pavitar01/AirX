const CrudRepository = require("./base-repository");
const models = require("../models");
class AirplaneRepository extends CrudRepository {
    constructor() {
        super(models.airplanes);
        console.log(models.airplanes);
    }
    
}
module.exports = AirplaneRepository;