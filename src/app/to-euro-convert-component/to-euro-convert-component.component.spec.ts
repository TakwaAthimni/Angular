import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEuroConvertComponentComponent } from './to-euro-convert-component.component';

describe('ToEuroConvertComponentComponent', () => {
  let component: ToEuroConvertComponentComponent;
  let fixture: ComponentFixture<ToEuroConvertComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToEuroConvertComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToEuroConvertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
