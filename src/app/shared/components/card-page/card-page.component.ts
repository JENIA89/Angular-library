import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {
  gridStyle = {
    width: '50%',
    textAlign: 'center'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
