import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl,
  FormsModule,
  NgForm,
} from '@angular/forms';

function noCourseCode(control: AbstractControl): ValidationErrors | null {
  if (control.value && typeof control.value === 'string' && control.value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: 'enrollment-form.html',
  styleUrls: ['enrollment-form.css'],
})
export class EnrollmentFrom {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;
  submitted = false;

  onSubmit(form: NgForm) {
    console.log('Form Value:', form.value);
    console.log('Is Form Valid?:', form.valid);

    if (form.valid) {
      this.submitted = true;
    }
  }
}
