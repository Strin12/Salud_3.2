import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recipes:any;
  inquiries:any;
  constructor(private recipe: RecipeService) { }

  ngOnInit() {
  
    this.recipe.list().subscribe(
      resp => {
        this.recipes = resp;
      }
    );
    this.recipe.getinquieries().subscribe(
      resp => {
        this.inquiries = resp;
      }
    );
  }
  returnRecipe(varia){
    this.recipe.returnRecipe(varia);
  }
  DownloadRecipe(varia){
     this.recipe.DowenloadRecipe(varia);
   }
}