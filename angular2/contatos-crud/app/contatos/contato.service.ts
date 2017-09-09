import { forEach } from '@angular/router/src/utils/collection';
import { Injectable } from '@angular/core';
import { CONTATOS } from './contatos-moc';
import { Contato } from './contato.model';

/**
 * Ele emmite metadados para o angular 2,
 * pra que ele identifica as depencias de contatoService,
 * para fazer a injeção de dependencias corretamente
 * 
 * Promise, recebe os dados assim que estiverem prontos,
 * trabalha de forma assincrona, é eager 
 * 
 * Promise erro ao nao retornar os dados
 */
@Injectable()
export class ContatoService {

    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContato(id: Number): Promise<Contato> {
    
      //  return this.getContatos().then((contatos: Contato[]) => {
            // return contatos.find((contato) => {
            //     return contato.id === id;
            // });
            //});

        return this.getContatos().then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        }).then(() => {
            console.log('primeiro then');
            return 'Curso Angular 2';
        }).then((param: string) => {
            console.log('sengundo then');
            console.log(param);

            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuando depois de 3 segundos');
                    resolve2();
                }, 3000);
            });

        }).then(() => { 
            console.log('terceiro then');    
            return this.getContatos();
        });
    }
}