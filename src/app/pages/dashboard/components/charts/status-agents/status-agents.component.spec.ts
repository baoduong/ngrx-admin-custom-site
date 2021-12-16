import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAgentsComponent } from './status-agents.component';

describe('StatusAgentsComponent', () => {
  let component: StatusAgentsComponent;
  let fixture: ComponentFixture<StatusAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
