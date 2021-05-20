import { Ingrediant } from "../shared/ingrediant.model";

export class Recipe{
    constructor(public name:string,public disc:string,public image:string,public ingrediants:Ingrediant[]){
    }
}