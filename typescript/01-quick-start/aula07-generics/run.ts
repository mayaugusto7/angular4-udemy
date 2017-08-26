

import { Repository } from "./repository";
import { Animal } from "../aula05-classes/Animal";
import { Cavalo } from "../aula05-classes/cavalo";

let repository: Repository<Animal> = new Repository<Animal>();

let animal: Animal = new Animal('Rex');
let cavalo: Cavalo = new Cavalo('Titã');

repository.insert(animal);
repository.insert(cavalo);