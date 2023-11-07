import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleResponsivaAdminComponent } from './detalle-responsiva-admin.component';

describe('DetalleResponsivaAdminComponent', () => {
  let component: DetalleResponsivaAdminComponent;
  let fixture: ComponentFixture<DetalleResponsivaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleResponsivaAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleResponsivaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
