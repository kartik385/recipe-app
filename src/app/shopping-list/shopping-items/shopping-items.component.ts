import { Component, Input, OnInit } from '@angular/core';
import { Ingrediant } from './../../shared/ingrediant.model';
import { ShoppingService } from './../shopping.service';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
  ingrediants:Ingrediant[]=[];
  constructor(private shoppingService:ShoppingService) { 
    
  }

  ngOnInit(): void {
    this.ingrediants=this.shoppingService.getIngrediants();
    this.shoppingService.ingrediantProvider.subscribe(
      
      (ingrediants:Ingrediant[])=>{
        console.log("catched")
        this.ingrediants=ingrediants;
      }
    );
    
  }
 

}
