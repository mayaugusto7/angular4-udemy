import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';


@Component({
    moduleId: module.id,
    selector: 'contato-detail',
    templateUrl: 'contato-detail.component.html'
})
export class ContatoDetailComponent implements OnInit { 

    constructor(private contatoService: ContatoService,
                private route: ActivatedRoute,
                private location: Location
            ) {}



    public ngOnInit(): void {
        console.log('On init');
        
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            console.log(id);

            this.contatoService.getContato(id).then((contato) => {
                console.log(contato);
            });
        });

    }
}