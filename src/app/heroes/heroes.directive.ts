import { Directive, OnInit, SimpleChanges } from '@angular/core';
import { FormService } from '../form.service';

let nextId = 1;

@Directive()
export class HeroesDirective implements OnInit {
  constructor(public logger: FormService) { }

  // implement OnInit's `ngOnInit` method
  ngOnChanges(changes: SimpleChanges): void {
    try{
        console.log(changes)
    }
    catch{
        throw new Error('Method not implemented.');
    }
  }

  ngOnInit(): void {
    this.logIt('On Init Parent')
  }

  logIt(msg: string) {
    this.logger.logStatus(`#${nextId++} ${msg}`);
  }
}
