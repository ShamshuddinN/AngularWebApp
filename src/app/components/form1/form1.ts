import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Form11 } from '../form11/form11';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export const futureMonthYearValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const monthControl = control.get('month');
  const yearControl = control.get('year');

  // If controls are not initialized or empty, let Validators.required handle it first.
  // This prevents this custom validator from firing prematurely and showing 'pastDate' errors.
  if (!monthControl || !yearControl || !monthControl.value || !yearControl.value) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // getMonth() is 0-indexed (0 = Jan, 11 = Dec)

  const selectedMonth = parseInt(monthControl.value, 10);
  const selectedYear = parseInt(yearControl.value, 10);

  // Check if parsed values are valid numbers.
  // Validators.pattern should catch most non-numeric inputs, but this is a safeguard.
  if (isNaN(selectedMonth) || isNaN(selectedYear)) {
    return { 'invalidMonthYearFormat': true };
  }

  // Logic for future/current date validation
  if (selectedYear < currentYear) {
    return { 'pastDate': true };
  }

  if (selectedYear === currentYear && selectedMonth < currentMonth) {
    return { 'pastDate': true };
  }

  // If all checks pass, the date is valid.
  return null;
};


@Component({
  selector: 'app-form1',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, Form11, ReactiveFormsModule, CommonModule],
  templateUrl: './form1.html',
  styleUrl: './form1.css'
})
export class Form1 implements OnInit {
  dateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with controls and validators
    this.dateForm = this.fb.group({
      // Month control: required, and must be 2 digits (01-12)
      month: ['', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])$/) // MM format, 01-12
      ]],
      // Year control: required, and must be 4 digits
      year: ['', [
        Validators.required,
        Validators.pattern(/^\d{4}$/) // YYYY format
      ]]
    }, {
      // Apply the custom validator to the entire FormGroup
      validators: futureMonthYearValidator
    });
  }

  parentMessage: string = 'Hello from parent!';
  parentUserName: string = 'Shams';

  ngOnInit(): void {
    // Optional: You can set initial values here if needed
    // this.dateForm.patchValue({
    //   month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
    //   year: new Date().getFullYear().toString()
    // });
  }

  get f() {
    return this.dateForm.controls;
  }

  onSubmit(): void {
    if (this.dateForm.valid) {
      console.log('Form is valid!', this.dateForm.value);
      alert('Form is valid! Month: ' + this.dateForm.value.month + ', Year: ' + this.dateForm.value.year);
      // Process your data here
    } else {
      console.log('Form is invalid.');
      // Mark all controls as touched to display validation messages immediately
      this.dateForm.markAllAsTouched();
      alert('Please correct the form errors.');
    }
  }

}
