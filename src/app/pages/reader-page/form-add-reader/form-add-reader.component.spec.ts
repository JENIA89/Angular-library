import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddReaderComponent } from './form-add-reader.component';

describe('FormAddReaderComponent', () => {
  let component: FormAddReaderComponent;
  let fixture: ComponentFixture<FormAddReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
