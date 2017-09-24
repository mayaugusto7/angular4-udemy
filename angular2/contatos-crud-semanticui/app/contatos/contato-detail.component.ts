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
         
                this.contatoService.getContato(id).then((contato) => {
                    this.contato = contato;          
                });
            }
         
        });

    }
}