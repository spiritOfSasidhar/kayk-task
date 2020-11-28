import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-taskOne',
  templateUrl: './taskOne.component.html',
  styleUrls: ['./taskOne.component.scss']
})
export class TaskOneComponent implements OnInit {

  patient: FormGroup;
  Drug: FormGroup;
  Prescriber: FormGroup;
  retail: FormGroup;
  retails: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.getPatientForm();
    this.getDrugForm();
    this.getPrescriberForm();
    this.getRetailForm();
    this.getRetailsForm();
   }


  getPatientForm(){
    this.patient = this.formBuilder.group({
      names: ['', [Validators.required]],
    })
  }
  getDrugForm(){
    this.Drug = this.formBuilder.group({
      names: ['', [Validators.required]],
    })
  }
  getPrescriberForm(){
    this.Prescriber = this.formBuilder.group({
      names: ['', [Validators.required]],
    })
  }
  getRetailForm(){
    this.retail = this.formBuilder.group({
      names: ['CASH', [Validators.required]],
      names1: [0, [Validators.required]],
      names2: [10, [Validators.required]],
      names3: ['21/8/2018', [Validators.required]],
      names4: [0, [Validators.required]],
      names5: ['SHP', [Validators.required]],
      names6: ['TRANSFER', [Validators.required]],
      names7: ['OVERRIDE', [Validators.required]],
      names8: ['EACH', [Validators.required]],
      names9: ['1G', [Validators.required]],
      names10: [10, [Validators.required]],
      names11: ['Take One Tablet a Day', [Validators.required]],
      names12: ['', [Validators.required]],
      names13: ['', [Validators.required]],
      names14: ['', [Validators.required]],
    })
  }
  getRetailsForm(){
    this.retails = this.formBuilder.group({
      names99: ['', [Validators.required]],
      names98: ['', [Validators.required]],
      names97: ['', [Validators.required]],
      names96: ['', [Validators.required]],
      names95: ['', [Validators.required]],
      names94: ['', [Validators.required]],
      names93: ['', [Validators.required]],
      names92: ['', [Validators.required]],
      names91: ['', [Validators.required]],
      names90: ['', [Validators.required]],
      names89: ['', [Validators.required]],
      names88: ['', [Validators.required]],
    })
  }
 
  ngOnInit() {
  }

}
