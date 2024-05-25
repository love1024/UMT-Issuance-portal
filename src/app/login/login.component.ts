import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  builder = inject(FormBuilder);
  router = inject(Router);
  form = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onFormSubmit(): void {
    console.log('Form submitted');

    // TODO: Remove after login
    this.router.navigateByUrl('/dashboard');
  }
}
