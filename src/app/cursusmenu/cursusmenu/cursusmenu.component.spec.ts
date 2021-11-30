import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursusMenuComponent } from './cursusmenu.component';

describe('MenuComponent', () => {
  let component: CursusMenuComponent;
  let fixture: ComponentFixture<CursusMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursusMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursusMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
