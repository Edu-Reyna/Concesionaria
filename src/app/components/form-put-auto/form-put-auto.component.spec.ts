import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPutAutoComponent } from './form-put-auto.component';

describe('FormPutAutoComponent', () => {
  let component: FormPutAutoComponent;
  let fixture: ComponentFixture<FormPutAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPutAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPutAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
