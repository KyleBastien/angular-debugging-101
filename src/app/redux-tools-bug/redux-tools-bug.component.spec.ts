import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxToolsBugComponent } from './redux-tools-bug.component';

describe('ReduxToolsBugComponent', () => {
  let component: ReduxToolsBugComponent;
  let fixture: ComponentFixture<ReduxToolsBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxToolsBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxToolsBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
