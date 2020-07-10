import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  gender: string[] = ['men', 'women'];
  sign: FormGroup;
  date: any;
  toggle = true;

  constructor() {
  }

  ngOnInit(): void {
    this.sign = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      tags: new FormArray([
        new FormControl('')
      ])
    });


    this.date = new Date().toString();
  }

  get all() {
    return this.sign.get('tags') as FormArray;
  }

  onsub() {
    console.log(this.sign);
  }
  change(){ return this.toggle = ! this.toggle ;}
  format(){ return this.toggle ? 'shortDate' : 'fullDate' ;}

}
