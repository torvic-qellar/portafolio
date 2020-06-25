import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  yearFecha: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
