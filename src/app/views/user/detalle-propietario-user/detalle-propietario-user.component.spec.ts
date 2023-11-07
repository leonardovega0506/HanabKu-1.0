import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePropietarioUserComponent } from './detalle-propietario-user.component';

describe('DetallePropietarioUserComponent', () => {
  let component: DetallePropietarioUserComponent;
  let fixture: ComponentFixture<DetallePropietarioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePropietarioUserComponent]
    });
    fixture = TestBed.createComponent(DetallePropietarioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
