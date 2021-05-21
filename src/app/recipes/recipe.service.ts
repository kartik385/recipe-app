import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from "../shared/ingrediant.model";
@Injectable()
export class RecipeService{
    recipes:Recipe[]=[new Recipe("Pizza","Italian cousine","https://imgmedia.lbb.in/media/2019/01/5c2f84d1d5b20859433ee25e_1546618065799.jpg",[new Ingrediant("Tomato",5),new Ingrediant("Bread",1)]),new Recipe("Roast Butternut coup","Swiss cousine","https://cookieandkate.com/images/2019/10/best-butternut-squash-soup-recipe-2-768x1154.jpg",[new Ingrediant("Butter",1),new Ingrediant("Garlic",3),new Ingrediant("Shallot",2)]),new Recipe("Rattatouile","Italian cousine","https://cookieandkate.com/images/2019/09/best-ratatouille-recipe-1-1-768x1154.jpg",[new Ingrediant("zucchini",2),new Ingrediant("basil",9)])];
    clickedRecipe=new EventEmitter<Recipe>();
    addToShopping=new EventEmitter<Ingrediant[]>();
    getRecipies(){
        return this.recipes.slice();
    }
}
