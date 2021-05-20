import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingrediant } from './../../shared/ingrediant.model';
import { ShoppingService } from './../shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  
  constructor(private shoppingService:ShoppingService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdd(name:HTMLInputElement,amount:HTMLInputElement){
      (name.value && amount.value)?this.shoppingService.addIngrediant(new Ingrediant(name.value,parseInt(amount.value))):null;
  }

  navRecipe(){
    this.router.navigate(['recipe']);
  }

}
