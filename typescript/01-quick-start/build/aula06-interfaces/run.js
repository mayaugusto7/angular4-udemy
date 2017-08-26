"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_repository_1 = require("./animal-repository");
var Animal_1 = require("../aula05-classes/Animal");
var repository = new animal_repository_1.AnimalRepository();
var animal = new Animal_1.Animal('Rex');
repository.insert(animal);
//# sourceMappingURL=run.js.map