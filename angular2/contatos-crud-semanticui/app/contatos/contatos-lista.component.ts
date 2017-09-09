import { Contato } from './contato.model';
import { CONTATOS } from './contatos-moc';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {

    contatos: Contato[];

    constructor(private contatoService: ContatoService){}


    public ngOnInit(): void {

        this.contatoService.getContatos()
        .then((contatos: Contato[]) => {
            this.contatos = contatos;
        }).catch(err => {console.log(err)});

    }
}