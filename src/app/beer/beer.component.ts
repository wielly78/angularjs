import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../service/data/beer-data.service';
import { Beer } from '../page2/page2.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  id: number
  beer: Beer

  constructor(
    private beerService: BeerDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.beer = new Beer(this.id,'',0)
    if(this.id != -1){
      this.beerService.retrieveBeer(this.id).subscribe(
        data => this.beer = data
      )
    }
  }

  saveBeer(){
    if(this.id == -1){
      this.beerService.createBeer(this.beer).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['page2'])
        }
      )
    }else{
      this.beerService.updateBeer(this.id,this.beer).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['page2'])
        }
      )
    }
  }
}
