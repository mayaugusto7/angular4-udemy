import { Contato } from './contato.model';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';
import { CONTATOS } from './contatos-moc';

// module.id usado somente quando for um templateUrl ou stylesUrl, para que ele consiga encontrar a referencia o template html
@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent {
    contatos: Contato[] = CONTATOS;

}