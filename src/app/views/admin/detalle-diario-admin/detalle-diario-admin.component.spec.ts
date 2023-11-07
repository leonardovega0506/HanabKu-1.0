import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDiarioAdminComponent } from './detalle-diario-admin.component';

describe('DetalleDiarioAdminComponent', () => {
  let component: DetalleDiarioAdminComponent;
  let fixture: ComponentFixture<DetalleDiarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDiarioAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleDiarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
