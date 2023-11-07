import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCitaUserComponent } from './detalle-cita-user.component';

describe('DetalleCitaUserComponent', () => {
  let component: DetalleCitaUserComponent;
  let fixture: ComponentFixture<DetalleCitaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCitaUserComponent]
    });
    fixture = TestBed.createComponent(DetalleCitaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
