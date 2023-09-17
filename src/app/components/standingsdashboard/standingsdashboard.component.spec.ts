import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsdashboardComponent } from './standingsdashboard.component';

describe('StandingsdashboardComponent', () => {
  let component: StandingsdashboardComponent;
  let fixture: ComponentFixture<StandingsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
