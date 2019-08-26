import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupleadsComponent } from './followupleads.component';

describe('FollowupleadsComponent', () => {
  let component: FollowupleadsComponent;
  let fixture: ComponentFixture<FollowupleadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowupleadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
