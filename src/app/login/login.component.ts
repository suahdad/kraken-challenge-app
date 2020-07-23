import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { 
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    })

    this.loginForm.valueChanges.subscribe(data => this.loginError=false);
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.loginForm.value).subscribe(data => {
      if(data === 400 || data === 401 || data === 404) {
        this.loginError = true
      } 

    })
    this.router.navigate(['home']);



  }
}
