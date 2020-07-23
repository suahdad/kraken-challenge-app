import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService) {
    this.registerForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
      cpassword:['', Validators.required]
    },{validators: this.confirmPassword})
   }

  ngOnInit(): void {
  }

  confirmPassword(group: FormGroup){
    let password = group.get('password').value;
    let cpassword = group.get('cpassword').value;

    return password == cpassword ? null : { 'notSame' :true}
  }

  register() {
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value).subscribe(data =>
        window.alert('success'));
      location.reload()
    }
    else {
      Object.keys(this.registerForm.controls).map( control => {
        this.registerForm.controls[control].updateValueAndValidity();
      })
    }
  }
  

}
