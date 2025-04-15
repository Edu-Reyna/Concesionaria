import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarseComponent } from './form-registrarse.component';

describe('FormRegistrarseComponent', () => {
  let component: FormRegistrarseComponent;
  let fixture: ComponentFixture<FormRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistrarseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
