import { Component, OnInit } from '@angular/core';
import { VitalService } from '../services/vital.service';
import { Vital } from '../models/vital';

@Component({
  selector: 'app-show-vitals',
  templateUrl: './show-vitals.component.html',
  styleUrls: ['./show-vitals.component.scss']
})
export class ShowVitalsComponent implements OnInit {

  public humanVitals: Vital[] = new Array();
  public addVital: boolean;
  public contactUs: boolean = true;
  public page = 1;
  constructor( private vitalService: VitalService) { }

  ngOnInit(): void {
    this.vitalService.getVitals().subscribe(data => {
      this.humanVitals = data.humanVitals;
      console.log(this.humanVitals)
    })
  }

}
