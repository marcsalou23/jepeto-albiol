import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
})
export class FotosComponent {
  // Define the photoNumbers array
  photoNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
