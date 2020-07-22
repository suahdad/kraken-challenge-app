import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  @Output() close = new EventEmitter();

  public showBanner=true  ;
  constructor() { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.close.emit(null)
  }

}
