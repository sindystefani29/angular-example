import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Form } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  //providers: [FormService]
})
export class FormComponent implements OnInit {
  arr: string[];
  text: string;
  model = new Form({first: 'Sindy', last: 'Stefani'})

  constructor(res: FormService) {
    this.arr = res.getCourseArr()
    this.text = ''
  }

  ngOnInit(): void {
    console.log(this.arr)
    console.log(this.model)
    this.text = 'change on init'
  }
}
