"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
var Animal_1 = require("../aula05-classes/Animal");
var cavalo_1 = require("../aula05-classes/cavalo");
var repository = new repository_1.Repository();
var animal = new Animal_1.Animal('Rex');
var cavalo = new cavalo_1.Cavalo('Titã');
repository.insert(animal);
repository.insert(cavalo);
//# sourceMappingURL=run.js.map