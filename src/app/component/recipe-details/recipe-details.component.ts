import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { MOCK_RECIPES } from 'src/assets/recipes.mock(1)';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {

  id: string;
  recipe: Recipe;

  constructor( private activatedRoute: ActivatedRoute
             , private service: RecipeService ) { 
            
  }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getRecipe( this.id ).subscribe( elem => this.recipe = elem );
    console.log(this.recipe);
  }

}
