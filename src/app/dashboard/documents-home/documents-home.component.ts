import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-documents-home',
  standalone: true,
  imports: [MatIconModule, RouterModule, MatButtonModule],
  templateUrl: './documents-home.component.html',
  styleUrl: './documents-home.component.scss',
})
export class DocumentsHomeComponent {
  router = inject(Router);

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
