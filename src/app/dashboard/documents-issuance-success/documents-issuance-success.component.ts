import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents-issuance-success',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './documents-issuance-success.component.html',
  styleUrl: './documents-issuance-success.component.scss',
})
export class DocumentsIssuanceSuccessComponent {
  router = inject(Router);

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
