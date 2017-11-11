import { DialogService } from './dialog.service';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { ContatosModule } from './contatos/contatos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRountingModule } from './app-routing.module';

@NgModule({
    imports: [
        AppRountingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        DialogService
    ]
    })
export class AppModule {

}
