import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { ShoppingService } from './../../shopping-list/shopping.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
    recipe:Recipe={name:"",disc:"",image:"",ingrediants:[]};
  constructor(private recipeService:RecipeService,private shoppingservice:ShoppingService,private router:Router) { }

  ngOnInit(): void {
    this.recipeService.clickedRecipe.subscribe(
      (recipe:Recipe)=>{
        this.recipe=recipe;
      }
    )
  }

  onClick(recipe:Recipe){
    this.shoppingservice.addToShopping(recipe.ingrediants);
  }

  navShopping(){
    this.router.navigate(['shopping'])
  }

}
