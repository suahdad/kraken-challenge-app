import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators'
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError;
  public submitSuccess;

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
        console.log(data)
        this.router.navigate(['home']);
      },error => {
        this.loginError = true
      })


  }
}
