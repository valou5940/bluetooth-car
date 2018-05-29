import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeniComponent } from './main-meni.component';

describe('MainMeniComponent', () => {
  let component: MainMeniComponent;
  let fixture: ComponentFixture<MainMeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
