import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-form11',
  imports: [],
  templateUrl: './form11.html',
  styleUrl: './form11.css'
})
export class Form11 {
  @Input('mymsg') message: string = '';
  @Input('name') userName: string = '';
}
