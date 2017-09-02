import { ContatosModule } from './contatos/contatos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRountingModule } from './app-routing.module';


@NgModule({
    imports: [
        AppRountingModule,
        BrowserModule,
        ContatosModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
    })
export class AppModule {

}
