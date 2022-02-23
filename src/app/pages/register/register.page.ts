import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any;
  isSubmitted = false;
  PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
  /**
   * get name
   */
  get name() {
    return this.RegisterForm.get('name');
  }
  /**
   * get email
   */
  get email() {
    return this.RegisterForm.get('email');
  }
  /**
   * get password
  */
  get password() {
    return this.RegisterForm.get('password');
  }
  /**
   * get confirmPassword
   */
  get confirmPassword() {
    return this.RegisterForm.get('confirmPassword');
  }
  /**
   * get gender
   */
  get gender() {
    return this.RegisterForm.get('gender');
  }
  /**
   * get phone
   */
  get phone() {
    return this.RegisterForm.get('phone');
  }
  /**
   * get address
   */
  get address() {
    return this.RegisterForm.get('address');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cannot be longer than 20 characters' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter valid email address' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password can be longer than 6 characters' },
      { type: 'maxlength', message: 'Password cannot be longer than 15 characters' },
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm Password is required' },
      { type: 'mustMatch', message: 'Confirm password is not same' },
    ],
    phone: [
      { type: 'required', message: 'Phone is required' },
      { type: 'pattern', message: 'Please enter valid phone' },
    ],
    gender: [
      { type: 'required', message: 'Gender is required' },
    ],
    address: [
      { type: 'required', message: 'Address is required' },
      { type: 'maxlength', message: 'Address cannot be longer than 30 characters' },
    ],
  };

  RegisterForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.pattern(this.PAT_EMAIL)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    confirmPassword: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
    gender: ['', Validators.required],
    address: ['', [Validators.required, Validators.maxLength(30)]],

  }, {
    validators: this.mustMatch('password', 'confirmPassword')
  })
  /**
   * password and confirm password function
   * @param controlName 
   * @param matchingControlName 
   * @returns 
   */
  mustMatch(controlName: string, matchingControlName: string) {
    console.log('mustmatch')

    return (formgroup: FormGroup) => {
      console.log(formgroup.controls[matchingControlName])
      const control = formgroup.controls[controlName]
      const matchingControl = formgroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true })
      }
      else {
        matchingControl.setErrors(null)
      }
    }
  }

  constructor(private router: Router, private formbuilder: FormBuilder) {

  }
  /**
   * signup submit function
   * 
   */
  onSubmit() {
    if (this.RegisterForm.valid) {
      console.log('myform')
      console.log(this.RegisterForm.value.name)
    }
  }
  ngOnInit() {

  }
}
