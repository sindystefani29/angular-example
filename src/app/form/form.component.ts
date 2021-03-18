import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  //providers: [FormService]
})
export class FormComponent implements OnInit {
  arr: string[];
  text: string;

  constructor(res: FormService) {
    this.arr = res.getCourseArr()
    this.text = ''
  }

  ngOnInit(): void {
    console.log(this.arr)
    this.text = 'change on init'
  }
}
