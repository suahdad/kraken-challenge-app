import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVitalsComponent } from './show-vitals.component';

describe('ShowVitalsComponent', () => {
  let component: ShowVitalsComponent;
  let fixture: ComponentFixture<ShowVitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
