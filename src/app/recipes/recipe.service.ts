import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from "../shared/ingrediant.model";
@Injectable()
export class RecipeService{
    recipes:Recipe[]=[new Recipe("pizza","Italian","https://imgmedia.lbb.in/media/2019/01/5c2f84d1d5b20859433ee25e_1546618065799.jpg",[new Ingrediant("tomato",5),new Ingrediant("bread",1)]),new Recipe("pizza","Italian","https://imgmedia.lbb.in/media/2019/01/5c2f84d1d5b20859433ee25e_1546618065799.jpg",[new Ingrediant("tomato",5),new Ingrediant("bread",1)])];
    clickedRecipe=new EventEmitter<Recipe>();
    addToShopping=new EventEmitter<Ingrediant[]>();
    getRecipies(){
        return this.recipes.slice();
    }
}
