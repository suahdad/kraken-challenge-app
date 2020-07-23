import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  
  constructor(private fb: FormBuilder,
    private vitalService: VitalService) { 
    this.vitalForm = this.fb.group({
      organizationId: [this.env.organizationid],
      businessUnitId: [this.env.businessUnitId],
      deviceId: [this.env.deviceId],
      heartRate: [''],
      temperature: ['']
    })
  }

  @Output() core = new EventEmitter();

  ngOnInit(): void {
  }

  closeWindow() {
    this.core.emit(null)
  }

  postVital(){
    this.vitalService.postVitals(this.vitalForm.value).subscribe(data => {
      console.log(data)
    });
  }


}
