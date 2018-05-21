import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tm-drvn',
  templateUrl: './tm-drvn.component.html',
  styleUrls: ['./tm-drvn.component.css']
})
export class TmDrvnComponent implements OnInit {

  myObj = {
    usNm: '',
    eml: '',
    pass: ''
  }
  
  constructor() { }

  ngOnInit() {
  }

  onSub(frm: NgForm) {
    console.log(frm)
    console.log(frm.value)
    console.log(this.myObj)
  }
}
