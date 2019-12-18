import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../service/data/beer-data.service';
import { Router } from '@angular/router';

export class Beer{
  constructor(
    public id: number,
    public name: string,
    public abv: number
  ){}
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  beers : Beer

  message : string

  //= [
  //  new Beer(1, 'Jai Alai', 7.5),
  //  new Beer(2, 'Stella Artois' , 5.0),
  //  new Beer(3, 'Lagunitas IPA' , 6.2)
  //]

  constructor(
    private service:BeerDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshBeer();
  }

  refreshBeer(){
    this.service.retrieveAllBeers().subscribe(
      response => {
          console.log(response);
          this.beers = response;
      }
    )
  }

  deleteBeer(id){
    this.service.deleteBeer(id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Beer ${id} Successful`;
        this.refreshBeer();
      }
    )
  }

  updateBeer(id){
    console.log(`update beer with id: ${id}`);
    this.router.navigate(['beer',id]);
  }

  addBeer(){
    this.router.navigate(['beer',-1])
  }
}
