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
  constructor(public logger: FormService) {
    super(logger);
  }
}
