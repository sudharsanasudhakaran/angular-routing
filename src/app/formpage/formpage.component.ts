import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
//import { DataService } from '../data.service';
@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  Id;
  product;
  dataList: [];
  constructor(private fb: FormBuilder, ) { 
  this.product= this.fb.group({
     'name': this.fb.control('', Validators.required),
     'price': this.fb.control('',[ Validators.required]),
     'stock': this.fb.control('',[ Validators.required])
    })
 }

  ngOnInit(): void {
  }

 // submit(form: FormGroup,){
 //   console.log(form, form.value.name.valid , form.value.price.valid, form.value.stock.valid)
 //   if(form.status === "VALID"){
 //   }
 // }
}