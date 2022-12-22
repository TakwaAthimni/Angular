import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurComponentComponent } from './convertisseur-component.component';

describe('ConvertisseurComponentComponent', () => {
  let component: ConvertisseurComponentComponent;
  let fixture: ComponentFixture<ConvertisseurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertisseurComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertisseurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
