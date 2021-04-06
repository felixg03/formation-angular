import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { MOCK_RECIPES } from 'src/assets/recipes.mock(1)';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor( private service: RecipeService ) { }

  ngOnInit(): void {
    this.service.getRecipes().subscribe( elem => this.recipes = elem );
  }

  reload( id: number ): void {
    this.recipes = this.recipes.filter( recipe => recipe.id != id ); 
  }
}
