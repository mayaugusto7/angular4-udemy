import { RepositoryInterface } from "./repository.interface";
import { AnimalRepository } from "./animal-repository";
import { Animal } from "../aula05-classes/Animal";

let repository: RepositoryInterface = new AnimalRepository();
let animal: Animal = new Animal('Rex');

repository.insert(animal);