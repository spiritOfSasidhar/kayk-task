import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneComponent } from './taskOne.component';

describe('TaskOneComponent', () => {
  let component: TaskOneComponent;
  let fixture: ComponentFixture<TaskOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
