import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breed-common',
  templateUrl: './breed-common.component.html',
  styleUrls: ['./breed-common.component.css']
})
export class BreedCommonComponent {
  @Input() title: any | undefined;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) { this.newItemEvent.emit(value); }
}


