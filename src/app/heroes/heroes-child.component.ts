import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-child',
  template: `
    <h2>the child</h2>
  `
})
export class HeroesChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
