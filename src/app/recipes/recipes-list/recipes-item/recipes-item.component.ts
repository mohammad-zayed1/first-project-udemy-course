import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent {
  @Input() recipeItem;
  @Output() itemDetails = new EventEmitter<void>();

  onShowDetails() {
    this.itemDetails.emit();
  }
}
