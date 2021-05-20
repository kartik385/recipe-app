import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { ShoppingItemsComponent } from './shopping-list/shopping-items/shopping-items.component';
import { ListEditComponent } from './shopping-list/list-edit/list-edit.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './recipes/recipe.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'recipe',component:RecipesComponent,children:[
    {path:':id',component:RecipesDetailComponent}
  ]},
  {path:'shopping',component:ShoppingListComponent},
  {path:'',component:RecipesComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    ShoppingItemsComponent,
    ListEditComponent,
    RecipeItemComponent,
    
  ],
  imports: [
  
  BrowserModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
