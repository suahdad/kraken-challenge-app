import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekVitalComponent } from './peek-vital.component';

describe('PeekVitalComponent', () => {
  let component: PeekVitalComponent;
  let fixture: ComponentFixture<PeekVitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeekVitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekVitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
