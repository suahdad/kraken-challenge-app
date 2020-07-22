import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-vitals',
  templateUrl: './add-vitals.component.html',
  styleUrls: ['./add-vitals.component.scss']
})
export class AddVitalsComponent implements OnInit {
  constructor() { }

  @Output() core = new EventEmitter();

  ngOnInit(): void {
  }

  closeWindow() {
    this.core.emit(null)
  }

}
