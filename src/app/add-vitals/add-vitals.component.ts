import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { VitalService } from '../services/vital.service';
@Component({
  selector: 'app-add-vitals',
  templateUrl: './add-vitals.component.html',
  styleUrls: ['./add-vitals.component.scss']
})
export class AddVitalsComponent implements OnInit {
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
      heartRate: ['',Validators.required],
      temperature: ['',Validators.required]
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
