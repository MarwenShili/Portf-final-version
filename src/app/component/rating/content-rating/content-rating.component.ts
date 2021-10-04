import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-content-rating',
  templateUrl: './content-rating.component.html',
  styleUrls: ['./content-rating.component.css']
})
export class ContentRatingComponent implements OnInit {
faStar= faStar
  form!: FormGroup;
  message: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
    cmt : new FormControl ('', [Validators.required]),
    });
  }
  Commt(val: any){
    //const formValue = this.form.value;
    //console.log(formValue['cmt']);
    console.warn(val);
    this.message= val;

  }

}
