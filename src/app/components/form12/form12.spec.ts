import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form12 } from './form12';

describe('Form12', () => {
  let component: Form12;
  let fixture: ComponentFixture<Form12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
