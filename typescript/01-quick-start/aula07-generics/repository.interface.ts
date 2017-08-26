interface RepositoryInterface <T> {

    tableName: string;

    insert(object: T): boolean;

    update(object: T): boolean;
    
    delete(id: number): T;
    
    find(id: number): T;

    //findAll(): [T];
    findAll(): Array <T>;
}


export { RepositoryInterface }