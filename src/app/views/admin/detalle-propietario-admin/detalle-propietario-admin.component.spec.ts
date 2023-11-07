import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePropietarioAdminComponent } from './detalle-propietario-admin.component';

describe('DetallePropietarioAdminComponent', () => {
  let component: DetallePropietarioAdminComponent;
  let fixture: ComponentFixture<DetallePropietarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePropietarioAdminComponent]
    });
    fixture = TestBed.createComponent(DetallePropietarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
