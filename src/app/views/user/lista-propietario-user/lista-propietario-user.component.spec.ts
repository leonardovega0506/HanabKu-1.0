import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPropietarioUserComponent } from './lista-propietario-user.component';

describe('ListaPropietarioUserComponent', () => {
  let component: ListaPropietarioUserComponent;
  let fixture: ComponentFixture<ListaPropietarioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPropietarioUserComponent]
    });
    fixture = TestBed.createComponent(ListaPropietarioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
