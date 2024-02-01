import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics';

  pageName: string = "recipe";

  onSelect(pageName: string) {
    this.pageName = pageName;
  }
}
