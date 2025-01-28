import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = '/Cv/Abdelaziz mohamed CV.pdf'; // Path to your file
    link.download = 'Abdelaziz Mohamed CV.pdf'; // File name to save as
    link.click(); // Trigger the download
  }
}
