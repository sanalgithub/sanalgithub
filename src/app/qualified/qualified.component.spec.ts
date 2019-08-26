import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedComponent } from './qualified.component';

describe('QualifiedComponent', () => {
  let component: QualifiedComponent;
  let fixture: ComponentFixture<QualifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
