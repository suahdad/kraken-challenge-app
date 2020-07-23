import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-login-master',
  templateUrl: './login-master.component.html',
  styleUrls: ['./login-master.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter',[
        style({
          opacity:0
        }),
        animate('1s ease')
      ])
    ])
  ]
})
export class LoginMasterComponent implements OnInit {


  constructor(){}
  
  public register;

  ngOnInit(): void {
  }

  registerMode() {
    this.register = true;
    console.log('registerMode')
  }


}
