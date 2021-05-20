import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { RecipeService } from './../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes:Recipe[]=[];
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipies();
  }

  onClick(recipe:Recipe){
    this.recipeService.clickedRecipe.emit(recipe);
  }

}
