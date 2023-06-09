import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ListItemDirective } from './shared/list-item.directive';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AlertsComponent,
    DropdownDirective,
    ListItemDirective,
    RecipeNotSelectedComponent,
    PageNotFoundComponent,
    NewRecipeComponent,
    EditRecipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
