import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainerItemComponent } from './grid-container-item.component';

describe('GridContainerItemComponent', () => {
  let component: GridContainerItemComponent;
  let fixture: ComponentFixture<GridContainerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridContainerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContainerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
