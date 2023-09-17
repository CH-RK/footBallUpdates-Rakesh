import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkrenderComponent } from './linkrender.component';

describe('LinkrenderComponent', () => {
  let component: LinkrenderComponent;
  let fixture: ComponentFixture<LinkrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkrenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
