import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqualifiedComponent } from './disqualified.component';

describe('DisqualifiedComponent', () => {
  let component: DisqualifiedComponent;
  let fixture: ComponentFixture<DisqualifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqualifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
