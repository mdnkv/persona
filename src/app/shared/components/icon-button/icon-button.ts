import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-icon-button',
  styleUrl: './icon-button.css',
  templateUrl: './icon-button.html',
})
export class IconButton {

  icon = input.required<string>()
  onButtonClicked = output()

}
