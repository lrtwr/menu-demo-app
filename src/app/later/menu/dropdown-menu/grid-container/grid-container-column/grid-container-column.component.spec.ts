import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainerColumnComponent } from './grid-container-column.component';

describe('GridContainerColumnComponent', () => {
  let component: GridContainerColumnComponent;
  let fixture: ComponentFixture<GridContainerColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridContainerColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContainerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
