import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBugComponent } from './pipe-bug.component';

describe('PipeBugComponent', () => {
  let component: PipeBugComponent;
  let fixture: ComponentFixture<PipeBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
