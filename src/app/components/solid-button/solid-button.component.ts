import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solid-button',
  templateUrl: './solid-button.component.html',
  styleUrls: ['./solid-button.component.less']
})
export class SolidButtonComponent {
  @Input() buttonTitle: string = "";
}
