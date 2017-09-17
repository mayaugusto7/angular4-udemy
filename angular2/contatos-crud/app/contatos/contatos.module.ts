import { FormsModule } from '@angular/forms';
import { ContatoService } from './contato.service';
import { ContatoDetailComponent } from './contato-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRountingModule } from './contato-routing.module';

/**
 * exports usado para modulos externos terem acesso ao component
 * imports usado para importas os modulos 
 */
@NgModule({
    imports: [
        CommonModule,
        ContatoRountingModule,
        FormsModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetailComponent
    ],
    exports: [
        ContatosListaComponent
    ],
    providers: [
        ContatoService
    ]

})
export class ContatosModule {

}