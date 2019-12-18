import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/page2/page2.component';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllBeers(){
    return this.http.get<Beer>('http://localhost:8080/getbeers');
  }

  deleteBeer(id){
    return this.http.delete(`http://localhost:8080/deletebeer/${id}`);
  }

  retrieveBeer(id){
    return this.http.get<Beer>(`http://localhost:8080/getbeer/${id}`);
  }

  updateBeer(id,beer){
    return this.http.put(`http://localhost:8080/updatebeer/${id}`,beer);
  }

  createBeer(beer){
    return this.http.post(`http://localhost:8080/addbeer`,beer);
  }
}
