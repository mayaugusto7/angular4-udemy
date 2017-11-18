import { error } from 'util';
import { Http, Headers, Response } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Injectable } from '@angular/core';
import { CONTATOS } from './contatos-moc';
import { Contato } from './contato.model';
import 'rxjs/add/operator/toPromise';

/**
 * Ele emmite metadados para o angular 2,
 * pra que ele identifica as depencias de contatoService,
 * para fazer a injeção de dependencias corretamente
 * 
 * Promise, recebe os dados assim que estiverem prontos,
 * trabalha de forma assincrona, é eager 
 * 
 * Promise erro ao nao retornar os dados
 * 
 * Converter Observable do Rxjs para PRomise utilizar o toPromise()
 * Podemos usas o 'as' para fazer um cast  response.json().data as Contato[]
 * response.json() tem a propriedade data onde estao os contatos
 */
@Injectable()
export class ContatoService {

    /**
     * O nome da url igual ao nome do atributo de retorno que esta no InMemoryDataService
     * e onde o HttpModules esta no app.module.ts
     */
    private contatosUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl).toPromise()
                        .then(response => response.json().data as Contato[])
                        .catch(this.handleError);
       // return Promise.resolve(CONTATOS);
    }

    getContato(id: Number): Promise<Contato> {
    
      //  return this.getContatos().then((contatos: Contato[]) => {
            // return contatos.find((contato) => {
            //     return contato.id === id;
            // });
            //});

        return this.getContatos().then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    create(contato: Contato): Promise<Contato> {
        return this.http.post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
                        .toPromise()
                        .then((response: Response) => response.json().data as Contato)
                        .catch(this.handleError);
    }    

    update(contato: Contato): Promise<Contato> {

        const url = `${this.contatosUrl}/${contato.id}`; // app/contatos/:id
     
        return this.http.put(url, JSON.stringify(contato), {headers: this.headers})
                        .toPromise()
                        .then(() => contato as Contato)
                        .catch(this.handleError);

    }

    delete(contato: Contato): Promise<Contato> {

        const url = `${this.contatosUrl}/${contato.id}`; // app/contatos/:id

        return this.http.delete(url, {headers: this.headers})
                        .toPromise()
                        .then(() => contato as Contato)
                        .catch(this.handleError);
                
    }
    

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
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