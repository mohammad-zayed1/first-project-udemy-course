import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
  @Output() page = new EventEmitter<string>();

  onPageChange(pageName: string) {
    this.page.emit(pageName);
  }
}
