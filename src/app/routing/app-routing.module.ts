import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { from } from "rxjs";
import { RecipeDetailsComponent } from "../component/recipe-details/recipe-details.component";
import { RecipeListComponent } from "../component/recipe-list/recipe-list.component";
import { RecipeNewComponent } from "../component/recipe-new/recipe-new.component";



export const routes: Routes = [
    {
        path: 'recipes',
        component: RecipeListComponent,
        pathMatch:'full'
    },
    {
        path: 'recipes/details/:id',
        component: RecipeDetailsComponent,
        pathMatch: 'full'
    },
    {
        path: 'recipes/new',
        component: RecipeNewComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'recipes',
        pathMatch: 'full'
    }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot( routes )
    ]
})
export class AppRoutingModule { }