import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


/**
 * Configura as rotas
 */

 const appRoutes: Routes = [
     {
         path: '',
         redirectTo: '/contato',
         pathMatch: 'full'
     }
 ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}