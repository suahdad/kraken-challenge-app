import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { VitalService } from '../services/vital.service';
import { Vital } from '../models/vital';

@Component({
  selector: 'app-peek-vital',
  templateUrl: './peek-vital.component.html',
  styleUrls: ['./peek-vital.component.scss']
})
export class PeekVitalComponent implements OnInit {

  public vitalForm: FormGroup
  public env = environment;
  public submitSuccess;

  public isSubmitted;
  
  constructor(private fb: FormBuilder,
    private vitalService: VitalService) { 
    this.vitalForm = this.fb.group({
      organizationId: [this.env.organizationid],
      businessUnitId: [this.env.businessUnitId],
      deviceId: [this.env.deviceId],
      heartRate: [this.vitalService.peekVitalData.heartRate,Validators.required],
      temperature: [this.vitalService.peekVitalData.temperature,Validators.required]
    })
    this.vitalForm.valueChanges.subscribe(date => {
      this.isSubmitted = false
      this.submitSuccess = false
    });
  }

  @Output() core = new EventEmitter();
  @Output() submitted = new EventEmitter();

  ngOnInit(): void {
  }

  closeWindow() {
    this.core.emit(null)
    this.submitted.emit(null)
  }

  postVital(){
    this.submitSuccess = false;
    this.isSubmitted=true;
    if(this.vitalForm.valid){
      this.vitalService.postVitals(this.vitalForm.value).subscribe(data => {
        console.log(data)
        this.submitSuccess = true;

      });
    }
  }

}
