import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  handleButtonClick(event: Event): void {
    console.log('Button clicked!', event);
  }
}
