import { ContatoService } from './contato.service';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatosListaComponent } from './contatos-lista.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContatoDetailComponent } from './contato-detail.component';


@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule
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
export class ContatosModule {}