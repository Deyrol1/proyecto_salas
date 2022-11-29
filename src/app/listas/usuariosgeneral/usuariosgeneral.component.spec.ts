import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosgeneralComponent } from './usuariosgeneral.component';

describe('UsuariosgeneralComponent', () => {
  let component: UsuariosgeneralComponent;
  let fixture: ComponentFixture<UsuariosgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosgeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
