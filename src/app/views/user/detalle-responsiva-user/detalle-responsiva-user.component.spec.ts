import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleResponsivaUserComponent } from './detalle-responsiva-user.component';

describe('DetalleResponsivaUserComponent', () => {
  let component: DetalleResponsivaUserComponent;
  let fixture: ComponentFixture<DetalleResponsivaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleResponsivaUserComponent]
    });
    fixture = TestBed.createComponent(DetalleResponsivaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
