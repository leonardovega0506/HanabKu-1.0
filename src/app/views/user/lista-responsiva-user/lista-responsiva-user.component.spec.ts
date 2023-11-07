import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResponsivaUserComponent } from './lista-responsiva-user.component';

describe('ListaResponsivaUserComponent', () => {
  let component: ListaResponsivaUserComponent;
  let fixture: ComponentFixture<ListaResponsivaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaResponsivaUserComponent]
    });
    fixture = TestBed.createComponent(ListaResponsivaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
