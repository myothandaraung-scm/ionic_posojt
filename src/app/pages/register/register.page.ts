import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  data: any;
  isSubmitted = false;
  row_data: any = [];

  constructor(private router: Router) {
    this.data = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: ''
    }
  }
    //Inset row in the table
  onSubmit(myForm: NgForm) {
    this.isSubmitted = true;
    console.log('---valid check---', myForm.valid);
    console.log(this.isSubmitted)
    if(myForm.valid)
    {
      console.log('myform')
    }
  }

  ngOnInit() {
  }

}
