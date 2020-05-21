import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDangerComponent } from './warning-danger.component';

describe('WarningDangerComponent', () => {
  let component: WarningDangerComponent;
  let fixture: ComponentFixture<WarningDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
