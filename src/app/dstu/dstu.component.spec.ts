import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DstuComponent } from './dstu.component';

describe('DstuComponent', () => {
  let component: DstuComponent;
  let fixture: ComponentFixture<DstuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DstuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
