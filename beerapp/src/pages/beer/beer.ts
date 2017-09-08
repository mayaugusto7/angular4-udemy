import { BeerService } from './../../providers/beer/beer.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
})
export class BeerPage {

  private beers: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public beerService: BeerService) {
  }

  ionViewDidLoad() {
    this.beerService.getGoodBeers().subscribe(beers => {
      this.beers = beers;
    });
  }

}
