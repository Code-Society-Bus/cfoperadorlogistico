import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  activar:Boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  apagar() {
    this.activar =
      !this.activar;
  }
}
