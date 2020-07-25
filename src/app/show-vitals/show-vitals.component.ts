import { Component, OnInit, ViewChild } from '@angular/core';
import { VitalService } from '../services/vital.service';
import { Vital } from '../models/vital';
import { UserService } from '../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-show-vitals',
  templateUrl: './show-vitals.component.html',
  styleUrls: ['./show-vitals.component.scss']
})
export class ShowVitalsComponent implements OnInit {

  public humanVitals: Vital[] = new Array();
  public addVital: boolean;
  public peekVital:boolean;
  public peekVitalData: Vital;

  displayedColumns: string[] = ['settings','deviceId','heartRate','temperature','timeStamp'];

  public sortedHumanVitals: Vital[] = new Array();

  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
  dataSource;

  constructor( public vitalService: VitalService,
    private userService:UserService) { }

  ngOnInit(): void {
    
    this.vitalService.getVitals().subscribe((data) => {
      this.humanVitals = data.humanVitals;
      this.sortedHumanVitals = this.humanVitals.sort((a,b) => {
        return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()})

        this.dataSource = new MatTableDataSource<Vital>(this.sortedHumanVitals)
        this.dataSource.paginator = this.paginator;
      });

      // this.humanVitals.sort((a,b) => {
      //   return b.timeStamp.getTime() - a.timeStamp.getTime()


  }

  getVitals(){
    this.vitalService.getVitals().subscribe((data) => {
      this.humanVitals = data.humanVitals;
      this.sortedHumanVitals = this.humanVitals.sort((a,b) => {
        return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()})

        this.dataSource = new MatTableDataSource<Vital>(this.sortedHumanVitals)
        this.dataSource.paginator = this.paginator;
      });
  }

  logout(){
    this.userService.logout();
    location.reload();
  }

  sortData(sort: Sort) {
    const data = this.sortedHumanVitals.slice();

    if(!sort.active || sort.direction=== '') {
      this.sortedHumanVitals=data;
      return;
    }
    
    this.sortedHumanVitals = data.sort((a,b) => {
    const isAsc = sort.direction == 'asc';
    switch(sort.active){
      case 'deviceId': return this.compare(a.deviceId,b.deviceId,isAsc);
      case 'heartRate': return this.compare(a.heartRate,b.heartRate,isAsc);
      case 'temperature': return this.compare(a.temperature,b.temperature,isAsc);
      case 'timeStamp': return this.compare(new Date(a.timeStamp).getTime(),new Date(b.timeStamp).getTime(),isAsc);
    }
  });

  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
