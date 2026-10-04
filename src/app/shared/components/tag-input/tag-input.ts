import { Component, input, output } from '@angular/core';
import { TagInputItemConfiguration } from '../../models/shared.models';

@Component({
  imports: [],
  selector: 'app-tag-input',
  styleUrl: './tag-input.css',
  templateUrl: './tag-input.html',
})
export class TagInput {

  options = input.required<TagInputItemConfiguration[]>()
  selectedKey = input.required<string>()
  label = input.required<string>()
  onSelectOption = output<string>()

}
