import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-verification-result',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './verification-result.component.html',
  styleUrl: './verification-result.component.scss',
})
export class VerificationResultComponent {
  data = {
    date: '28-05-24',
    student: 'Khurram Adhami',
    enrollment: 'NED/0719/13-14',
    department: 'Software Engineering',
    batch: '2013-14',
    blockchainProof: 'sdfsdfxxf23dsf',
    certificateId: '1bX1239',
    certificateUrl: 'https://donwload.url',
  };
}
