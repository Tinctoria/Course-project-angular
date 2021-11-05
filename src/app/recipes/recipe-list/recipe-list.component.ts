import { Component, OnInit,EventEmitter, Output } from '@angular/core';


import { Recipe } from '../recipe.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.',
    'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80'),
    new Recipe('Another Test Recipe', 'This is simply a test.',
    'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80')
  ];

  @Output() recipeChoice = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onChosenRecipe(recipe: Recipe) {
    this.recipeChoice.emit(recipe); 
  }

}
