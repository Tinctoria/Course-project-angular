import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription; 
  editMode= false; 
  editedItemIndex: number; 
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=> {
        this.editedItemIndex = index;
        this.editMode = true; 
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name, 
          amount: this.editedItem.amount,
          enhet: this.editedItem.enhet
        });
      }
    );

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.enhet);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }else {
      this.slService.addIngredient(newIngredient);
      
    }
    form.reset();
    this.editMode=false;
  }

  onClear() {
    this.slForm.reset(); 
    this.editMode=false;
  }

  onDelete() { 
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear(); 
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
