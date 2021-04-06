import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
  
  recipe: Recipe;

  constructor( private service: RecipeService
             , private router: Router ) { }

  ngOnInit(): void {
  }


  onFormSubmit(recipeForm: NgForm): void {
    this.recipe = recipeForm.value as Recipe;
    
    this.service.postRecipe( this.recipe ).subscribe(
      result => this.router.navigate([`recipes/details/${result}`]),
      err => console.log(err)
    );
  }

  resetRecipeForm(recipeForm: NgForm): void {
    recipeForm.reset();
  }
}
