import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';

import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './routing/app-routing.module';
import { RecipeDetailsComponent } from './component/recipe-details/recipe-details.component';
import { RecipeNewComponent } from './component/recipe-new/recipe-new.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeNewComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,

    MatIconModule,
    MatToolbarModule,

    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
