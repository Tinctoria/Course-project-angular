import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() sendItemToShoppinglist = new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(name, amount, enhet) {
    const newIngredient = new Ingredient(name, amount, enhet)
    this.sendItemToShoppinglist.emit(newIngredient)
  }


}
