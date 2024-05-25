import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface User {
  name: string;
}

@Component({
  selector: 'app-documents-issuance',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    AsyncPipe,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgIf,
  ],
  templateUrl: './documents-issuance.component.html',
  styleUrl: './documents-issuance.component.scss',
})
export class DocumentsIssuanceComponent {
  builder = inject(FormBuilder);
  router = inject(Router);
  form = this.builder.group({
    enrollmentNumber: [''],
    firstName: [''],
    lastName: [''],
    department: [''],
    cgpa: [''],
    batchYear: [''],
    graduationYear: [''],
  });
  options: string[] = ['NED/0719/13-14', 'NED/8019/17-14', 'NED/1010/10-14'];
  filteredOptions!: Observable<string[]>;
  showSpinner = false;

  ngOnInit() {
    this.filteredOptions =
      this.form.controls.enrollmentNumber.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
  }

  navigateTo(url: string): void {
    this.showSpinner = true;
    setTimeout(() => this.router.navigateByUrl(url), 2000);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
