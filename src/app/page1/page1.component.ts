import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  books= [
    {id: 1 , title: 'learn react' , author: 'arnold' , publisher: '2009'},
    {id: 2 , title: 'learn angular' , author: 'stefan' , publisher: '2012'},
    {id: 3 , title: 'learn vue' , author: 'roger' , publisher: '2016'}
]

  constructor() { }

  ngOnInit() {
  }

}
