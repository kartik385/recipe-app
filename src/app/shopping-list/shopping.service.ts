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
        this.recipeService.addToShopping.subscribe(
            (ingrediants:Ingrediant[])=>{
                console.log("catched");
                this.ingrediants.push(...ingrediants);
                this.ingrediantProvider.emit(this.ingrediants.slice());
            }
        )
    }

    addToShopping(ingrediants:Ingrediant[]){
        this.ingrediants.push(...ingrediants);
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
        this.ingrediantProvider.emit(
            this.ingrediants
        );
    }
    getIngrediants():Ingrediant[]{
        return this.ingrediants.slice();
    }
    addIngrediant(ingrediant:Ingrediant){
        this.ingrediants.push(ingrediant);
        this.ingrediantProvider.emit(
            this.ingrediants.slice()
        );
    }

}