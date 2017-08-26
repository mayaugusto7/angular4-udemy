import { RepositoryInterface } from "./repository.interface";
import { Animal } from "../aula05-classes/Animal";

class Repository<T> implements RepositoryInterface<T> {
 
  tableName: string;
 
  insert(object: T): boolean {
    console.log('Inserting...');
    return true;
  }
 
  update(object: T): boolean {
    return true;
  }
 
  delete(id: number): T {
    return null;
  }
 
  find(id: number): T {
    return null;
  }
 
  findAll(): Array<T> {
    return [null]
  }

}

export { Repository }