import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(name, amount, enhet) {
    const newIngredient = new Ingredient(name, amount, enhet);
    this.slService.addIngredient(newIngredient);
  }


}
