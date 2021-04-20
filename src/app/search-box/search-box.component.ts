import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Options, LabelType } from "ng5-slider";

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class SearchBoxComponent implements OnInit {
 
  Myform: FormGroup;
  

  //Material Select Config ***************
  regions: Region[]=[
    {value: 'TUNIS', viewValue: 'Tunis'},
    {value: 'ARIANA', viewValue: 'Ariana'},
    {value: 'MANNOUBA', viewValue: 'La Mannouba'}
  ]; 
  
  //original config https://stackblitz.com/edit/ng5-slider-customised-range-slider-example-r6xpgg?file=src%2Fapp%2Fapp.component.ts
  //multi Silder Config****************
  minValue: number = 300000;
  maxValue: number = 590000;
  
  
  options: Options = {
    floor: 50000,
    ceil: 900000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min:</b> M.Tnd " + value;
        case LabelType.High:
          return "<b>Max:</b> M.Tnd " + value;
        default:
          return "M.Tnd " + value;
      }
    }
  };

  

  constructor(private fb:FormBuilder) {

    this.Myform= fb.group({
      Surface: new FormControl(100,Validators.min(10)),
      PassField: new FormControl(),
      Check: new FormControl(),
      RegionField:new FormControl(),
      range:new FormControl(),
      Region:new FormControl(),
      RoomsNumber: new FormControl(2, Validators.min(0))
      
    });

   }

  ngOnInit(): void {
 
   

   
   
  }
  onSubmit() {
    console.log(this.Myform);
   
    console.log(this.Myform.value.RegionField)
    console.log(this.Myform.value.PassField)
    console.log(this.Myform.value.range)
    console.log(this.Myform.value.FoodField  )
  
  
    console.log(this.minValue)
    console.log(this.maxValue)
  }

}



