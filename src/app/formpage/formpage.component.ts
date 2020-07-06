import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { fn, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { empty } from 'rxjs';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  userForm;
  userList: Array<any>= [];
  requirementMessage: string= "";
  callForm(fb: FormBuilder){
    this.userForm= this.fb.group
    ({
      'name': fb.control('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
      'price': fb.control('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
      'stonk': fb.control('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),

    })
  }
  constructor() {this.callForm(fb) }

  ngOnInit(){
  }
  onSubmit(form: FormGroup) {
    //check required fields

     if(!form.value.name.localeCompare('')){
      window.scroll(0, 0);
      this.requirementMessage= "Name is a required field";
    }
   
  }

  formReset(formL: FormGroup){
    this.userForm.reset(formL)
  }
  delete(index: number){
    console.log("here")
    this.userList.splice(index, 1);
  }
}

