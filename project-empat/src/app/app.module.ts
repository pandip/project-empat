import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

//recipe
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';

//shopping
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipeComponent,
      ShoppingListComponent,
      DropdownDirective,
      //recipe
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      //shopping
      ShoppingEditComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [ShoppingListService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
