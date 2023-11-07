import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDiarioUserComponent } from './detalle-diario-user.component';

describe('DetalleDiarioUserComponent', () => {
  let component: DetalleDiarioUserComponent;
  let fixture: ComponentFixture<DetalleDiarioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDiarioUserComponent]
    });
    fixture = TestBed.createComponent(DetalleDiarioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
