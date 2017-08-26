import { RepositoryInterface } from "./repository.interface";
import { Animal } from "../aula05-classes/Animal";

class AnimalRepository implements RepositoryInterface {

  tableName: string = '';

  //metodos void retornan undefined
  insert(animal: Animal): boolean {
    console.log('Inserting...');
    animal.mover(50);
    return true;
  }

  update(animal: Animal): boolean {
     return true;
  }

  delete(id: number): Animal {
    return null;
  }

  find(id: number): Animal {
    return null;
  }

  findAll(): [Animal] {
    return [new Animal('Rex')]
  }
}


export { AnimalRepository }