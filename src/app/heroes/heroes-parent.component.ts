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
  actionName: string;
  redColor: string;
  isPink: boolean
  constructor(public service: FormService) {
    super(service);
    this.data = service.getCourseArr()
    this.actionName = 'AriaUpdate'
    this.redColor = 'red'
    this.isPink = true
  }
  get color() : string{
    if(this.isPink){
      return 'pink'
    }else{
      return 'blue'
    }
  }
  setColor(val){
    this.isPink = !val
  }
  addItem(val){
    this.emitHere = val
  }
  getEvent(e){
    console.log(e)
  }
}
