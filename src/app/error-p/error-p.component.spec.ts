import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPComponent } from './error-p.component';

describe('ErrorPComponent', () => {
  let component: ErrorPComponent;
  let fixture: ComponentFixture<ErrorPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
