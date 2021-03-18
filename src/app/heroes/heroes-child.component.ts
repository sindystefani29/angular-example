import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-heroes-child',
  template: `
    <h2>the child</h2>
    <ul>
      <li *ngFor="let item of cobaProps">{{item}}</li>
    </ul>
    <input (change)="addNewItem(text.value)" #text [(ngModel)] = "textValue" />
  `
})
export class HeroesChildComponent implements OnInit {
  @Input() cobaProps: string
  @Output() newItemEvent = new EventEmitter<string>();
  textValue: string
  constructor() { }

  addNewItem(value: string) {
    this.newItemEvent.emit(this.textValue);
    console.log(value, this.textValue)
  }

  ngOnInit(): void {
  }

}
