import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectManagerComponent } from './list-project-manager.component';

describe('ListProjectManagerComponent', () => {
  let component: ListProjectManagerComponent;
  let fixture: ComponentFixture<ListProjectManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProjectManagerComponent]
    });
    fixture = TestBed.createComponent(ListProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
