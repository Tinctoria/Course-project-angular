import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 'A super tasty schnitzel - just Awesome!',
        'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_195580/cf_259/vego-schnitzel_med_ljummen_potatissallad.jpg',
        [
            new Ingredient('schnitzel', 2, 'st'),
            new Ingredient('potatis', 6, 'st'),
            new Ingredient('sås', 4, 'dl')

        ]),
        new Recipe(
            'Big Burger', 'Big veggie burger!',
        'https://kurera.se/wp-content/uploads/2017/05/ultimate_vego_burger_580.jpg',
        [   new Ingredient('Vegoburger', 2, 'st'),
            new Ingredient('pommes', 400, 'g'),
            new Ingredient('Bröd', 2, 'par')])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients); 
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) { 
          this.recipes.splice(index, 1); 
          this.recipesChanged.next(this.recipes.slice());

      }
    
}