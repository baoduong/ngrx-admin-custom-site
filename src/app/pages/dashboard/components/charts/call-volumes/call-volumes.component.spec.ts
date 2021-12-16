import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallVolumesComponent } from './call-volumes.component';

describe('CallVolumesComponent', () => {
  let component: CallVolumesComponent;
  let fixture: ComponentFixture<CallVolumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallVolumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
