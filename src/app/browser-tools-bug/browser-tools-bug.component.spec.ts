import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserToolsBugComponent } from './browser-tools-bug.component';

describe('BrowserToolsBugComponent', () => {
  let component: BrowserToolsBugComponent;
  let fixture: ComponentFixture<BrowserToolsBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserToolsBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserToolsBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
