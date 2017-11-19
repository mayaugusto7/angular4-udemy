import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';


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
            'field': true,
            'ui error message': !isValid && !isPristine,
            'ui success message': isValid && !isPristine
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

    onSubmint(): void {

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