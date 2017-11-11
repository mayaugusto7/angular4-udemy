import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';

//Usuados para extrair os parametros das rotas
import { ActivatedRoute, Params} from '@angular/router';

import { Location } from '@angular/common';

//.ng-valid[required] quando queremos aplicar ao compo passamos o parametro required
//.ng-valid e aplicado a todo formulario
@Component({
    moduleId: module.id,
    selector: 'contato-detail',
    templateUrl: 'contato-detail.component.html'
})
export class ContatoDetailComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(private contatoService: ContatoService,
                private route: ActivatedRoute,
                private location: Location
    ) {}

    /**
     * sinal de + converte uma string para numero
     * O nome do parametro que pegamos e o id declarado na rota
     *     path: 'contato/save/:id',
     */
    public ngOnInit(): void {

        this.contato = new Contato(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            console.log(id);

            if (id) {

                this.isNew = false;

                this.contatoService.getContato(id).then((contato) => {
                    //console.log(contato);
                    this.contato = contato;
                });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean):any {

        let validator = {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };

        //console.log(validator);

        return validator;
    } 

    getFormControlClass(isValid: boolean, isPristine: boolean):any {
        
        let validator = {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };

        //console.log(validator);

        return validator;
    } 

    onSubmit(): void {

        let promise;
        
        if (this.isNew) {
            console.log('Novo contato');
            promise = this.contatoService.create(this.contato);
        } else {
            console.log('Alterar contato');
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.location.back());
    }
}