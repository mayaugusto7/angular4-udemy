"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("../aula05-classes/Animal");
var AnimalRepository = (function () {
    function AnimalRepository() {
        this.tableName = '';
    }
    //metodos void retornan undefined
    AnimalRepository.prototype.insert = function (animal) {
        console.log('Inserting...');
        animal.mover(50);
        return true;
    };
    AnimalRepository.prototype.update = function (animal) {
        return true;
    };
    AnimalRepository.prototype.delete = function (id) {
        return null;
    };
    AnimalRepository.prototype.find = function (id) {
        return null;
    };
    AnimalRepository.prototype.findAll = function () {
        return [new Animal_1.Animal('Rex')];
    };
    return AnimalRepository;
}());
exports.AnimalRepository = AnimalRepository;
//# sourceMappingURL=animal-repository.js.map