import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorComponentComponent } from './actor-component.component';

describe('ActorComponentComponent', () => {
  let component: ActorComponentComponent;
  let fixture: ComponentFixture<ActorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
