import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_RECIPES } from 'src/assets/recipes.mock(1)';
import { Recipe } from '../model/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private serverUrl = 'http://10.0.1.153:8080/api/';
  private recipeUrl = this.serverUrl + 'v1/recipes';


  constructor( private http: HttpClient ) { }



  
  getRecipes() : Observable<Recipe[]> {
   
    //return of(MOCK_RECIPES);
    return this.http.get<Recipe[]>( this.recipeUrl );
  }



  getRecipe( id: string ) : Observable<Recipe> {
    
    //return of(MOCK_RECIPES[ id ]);
    return this.http.get<Recipe>( `${this.recipeUrl}/${id}` );
  }



  postRecipe( recipe: Recipe ): Observable<number> {
    return this.http.post<number>( this.recipeUrl, recipe );
  }



  deleteRecipe( id: number ): Observable<void> {
    return this.http.delete<void>( `${ this.recipeUrl }/${ id }` );
  }
}
