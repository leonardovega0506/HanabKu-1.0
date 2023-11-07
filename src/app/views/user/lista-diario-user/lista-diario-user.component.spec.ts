import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiarioUserComponent } from './lista-diario-user.component';

describe('ListaDiarioUserComponent', () => {
  let component: ListaDiarioUserComponent;
  let fixture: ComponentFixture<ListaDiarioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDiarioUserComponent]
    });
    fixture = TestBed.createComponent(ListaDiarioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
