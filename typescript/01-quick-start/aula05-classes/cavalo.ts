
import { Animal } from "./Animal";

class Cavalo extends Animal {

    constructor(nome: string) {
        super(nome);
    }


    public mover(distanciaEmMetros: number): void {
        console.log('Galopando...');
        super.mover(distanciaEmMetros);
    }

}

export { Cavalo }