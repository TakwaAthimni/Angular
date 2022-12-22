import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsComponentComponent } from './actors-component.component';

describe('ActorsComponentComponent', () => {
  let component: ActorsComponentComponent;
  let fixture: ComponentFixture<ActorsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
