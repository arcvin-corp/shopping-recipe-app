import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeNotSelectedComponent },
      { path: 'new', component: NewRecipeComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: EditRecipeComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
