
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  iter: number= 0;
  myForm: FormGroup;
  productList: Array<object>;
  constructor(private fb: FormBuilder ) { 
    this.myForm= this.fb.group({
      'name': ['', Validators.required],
      'price': ['',[ Validators.required]],
      'stock': ['',[ Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit(form: FormGroup,){
    console.log(form, form.value.name.valid , form.value.price.valid, form.value.stock.valid)
    if(form.status === "VALID"){
    }
  }
}