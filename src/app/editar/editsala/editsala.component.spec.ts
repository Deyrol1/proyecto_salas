import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalaComponent } from './editsala.component';

describe('EditsalaComponent', () => {
  let component: EditsalaComponent;
  let fixture: ComponentFixture<EditsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
