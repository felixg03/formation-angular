import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  eventRecipeDeleted: EventEmitter<number> = new EventEmitter();
    
  constructor( private service: RecipeService ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.service.deleteRecipe( this.recipe.id );
    this.eventRecipeDeleted.emit( this.recipe.id );
  }
}
