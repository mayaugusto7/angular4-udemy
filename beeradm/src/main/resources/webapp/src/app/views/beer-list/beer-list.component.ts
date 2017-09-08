import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService]
})
export class BeerListComponent implements OnInit {

  beers: Array<any>;

  constructor(private beerService: BeerService) { }

  ngOnInit() {

    this.beerService.getAll().subscribe(
      data => {
        this.beers = data;
        for (const beer of this.beers) {
          
        }
      },
      error => console.log(error)
    )

  }

}
