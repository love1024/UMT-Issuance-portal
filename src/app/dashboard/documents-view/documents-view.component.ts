import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HISTORY_DATA } from './documents-view.data';

@Component({
  selector: 'app-documents-view',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './documents-view.component.html',
  styleUrl: './documents-view.component.scss',
})
export class DocumentsViewComponent {
  displayedColumns: string[] = [
    'date',
    'student',
    'enrollment',
    'department',
    'batch',
    'blockchainProof',
    'certificateId',
    'certificateUrl',
  ];
  dataSource = HISTORY_DATA;
}
