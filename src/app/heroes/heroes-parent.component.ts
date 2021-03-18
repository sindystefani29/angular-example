import { Component, Input } from '@angular/core';
import { FormService } from '../form.service';
import { HeroesDirective } from './heroes.directive';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent extends HeroesDirective {
  @Input() propsExample: string;
  @Input('master') masterName: string;
  data: string[];
  emitHere: string
  constructor(public service: FormService) {
    super(service);
    this.data = service.getCourseArr()
  }
  addItem(val){
    this.emitHere = val
  }
}
