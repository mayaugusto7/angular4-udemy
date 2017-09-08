import { BeerService } from './../../providers/beer/beer.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerPage } from './beer';

@NgModule({
  declarations: [
    BeerPage,
  ],
  imports: [
    IonicPageModule.forChild(BeerPage),
  ],
  providers: [
    BeerService
  ]
})
export class BeerPageModule {
}
