import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form11 } from './form11';

describe('Form11', () => {
  let component: Form11;
  let fixture: ComponentFixture<Form11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
