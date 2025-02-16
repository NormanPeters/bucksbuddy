import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-main-view',
  imports: [
    ButtonComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  handleButtonClick(event: Event): void {
    console.log('Button clicked!', event);
  }
}
