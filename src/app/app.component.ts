import { Component } from '@angular/core';
import { CalculComponent } from './components/calcul/calcul.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-routing';
 value1 = 0;
 value2 = 0;
}
