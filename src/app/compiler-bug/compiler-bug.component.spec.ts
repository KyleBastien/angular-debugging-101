import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerBugComponent } from './compiler-bug.component';

describe('CompilerBugComponent', () => {
  let component: CompilerBugComponent;
  let fixture: ComponentFixture<CompilerBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilerBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
