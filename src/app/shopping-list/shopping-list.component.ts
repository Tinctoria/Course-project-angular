import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'st'),
    new Ingredient('Potatoes', 11, 'st')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }

}
