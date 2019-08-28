import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideTestComponent } from './inside-test.component';

describe('InsideTestComponent', () => {
  let component: InsideTestComponent;
  let fixture: ComponentFixture<InsideTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
