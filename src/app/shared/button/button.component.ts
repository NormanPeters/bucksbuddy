import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;

  @Output() clickEvent = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.clickEvent.emit(event);
    }
  }

}
