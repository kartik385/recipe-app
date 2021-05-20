import { Ingrediant } from './../shared/ingrediant.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { RecipeService } from './../recipes/recipe.service';
@Injectable()
export class ShoppingService implements OnInit{
    ingrediants:Ingrediant[]=[new Ingrediant("apple",5)];
    ingrediantProvider=new EventEmitter<Ingrediant[]>();
    
    constructor(private recipeService:RecipeService){

    }

    ngOnInit(){
        
    }

    repeatRemover(ingrediants:Ingrediant[]){
        let cleanArray:Ingrediant[]=[];
        let nonRepeat:any={};
        this.ingrediants.forEach((ingrediant:Ingrediant)=>{
                if(!nonRepeat.hasOwnProperty(ingrediant.name)){
                    nonRepeat[ingrediant.name]=true;
                    cleanArray.push(ingrediant);
                }
        }
        )
        this.ingrediants=cleanArray;
    }

    addToShopping(ingrediants:Ingrediant[]){
        this.ingrediants.push(...ingrediants);
        this.repeatRemover(this.ingrediants);
        this.ingrediantProvider.emit(
            this.ingrediants
        );
    }
    getIngrediants():Ingrediant[]{
        return this.ingrediants.slice();
    }
    addIngrediant(ingrediant:Ingrediant){
        this.ingrediants.push(ingrediant);
        this.repeatRemover(this.ingrediants);
        this.ingrediantProvider.emit(
            this.ingrediants.slice()
        );
    }

}