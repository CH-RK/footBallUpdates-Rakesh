import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureTeamDetailsComponent } from './fixture-team-details.component';

describe('FixtureTeamDetailsComponent', () => {
  let component: FixtureTeamDetailsComponent;
  let fixture: ComponentFixture<FixtureTeamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureTeamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
