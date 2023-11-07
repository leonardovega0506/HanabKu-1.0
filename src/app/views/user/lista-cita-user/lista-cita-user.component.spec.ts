import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitaUserComponent } from './lista-cita-user.component';

describe('ListaCitaUserComponent', () => {
  let component: ListaCitaUserComponent;
  let fixture: ComponentFixture<ListaCitaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCitaUserComponent]
    });
    fixture = TestBed.createComponent(ListaCitaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
