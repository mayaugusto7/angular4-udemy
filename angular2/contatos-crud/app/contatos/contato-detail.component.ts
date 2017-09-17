import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';

//Usuados para extrair os parametros das rotas
import { ActivatedRoute, Params} from '@angular/router';

import { Location } from '@angular/common';


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
                this.contatoService.getContato(id).then((contato) => {
                    //console.log(contato);
                    this.contato = contato;
                });
            }
        });
    }

    teste():void {
        console.log(this.contato);
    }
}