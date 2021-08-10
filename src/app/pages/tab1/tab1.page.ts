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
        console.log(this.recipes);
      }
    );
    this.recipe.getinquieries().subscribe(
      resp => {
        this.inquiries = resp;
        console.log(this.inquiries);
      }
    );
  }
  returnRecipe(varia){
   console.log(varia);
    this.recipe.returnRecipe(varia);
  }
  DownloadRecipe(varia){
    console.log(varia);
     this.recipe.DowenloadRecipe(varia);
   }
}