import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCitaAdminComponent } from './detalle-cita-admin.component';

describe('DetalleCitaAdminComponent', () => {
  let component: DetalleCitaAdminComponent;
  let fixture: ComponentFixture<DetalleCitaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCitaAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleCitaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
