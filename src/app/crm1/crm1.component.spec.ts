import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crm1Component } from './crm1.component';

describe('Crm1Component', () => {
  let component: Crm1Component;
  let fixture: ComponentFixture<Crm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
