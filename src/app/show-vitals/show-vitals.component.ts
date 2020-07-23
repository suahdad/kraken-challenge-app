import { Component, OnInit } from '@angular/core';
import { VitalService } from '../services/vital.service';
import { Vital } from '../models/vital';
import { UserService } from '../services/user.service';
import { Humanvital } from '../models/humanvital';

@Component({
  selector: 'app-show-vitals',
  templateUrl: './show-vitals.component.html',
  styleUrls: ['./show-vitals.component.scss']
})
export class ShowVitalsComponent implements OnInit {

  public humanVitals: Vital[] = new Array();
  public addVital: boolean;
  public contactUs: boolean;
  public page = 1;
  constructor( private vitalService: VitalService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.vitalService.getVitals().subscribe((data) => {
      this.humanVitals = data.humanVitals;
      this.humanVitals = this.humanVitals.sort((a,b) => {
        return new Date(b.timeStamp) - new Date(a.timeStamp)
      });
      
      console.log(this.humanVitals)
    })
  }

  logout(){
    this.userService.logout();
    location.reload();
  }

}
