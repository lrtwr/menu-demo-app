import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursusMenuItemComponent } from './cursusmenu-item.component';

describe('MenuItemComponent', () => {
  let component: CursusMenuItemComponent;
  let fixture: ComponentFixture<CursusMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursusMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursusMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
