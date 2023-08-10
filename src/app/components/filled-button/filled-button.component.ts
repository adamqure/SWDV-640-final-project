import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.less']
})
export class FilledButtonComponent {
  @Input() title = '';
}
