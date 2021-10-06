import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
})
export class DietaPage implements OnInit {
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
  returnExpedient(varia){
     this.recipe.returnDiet();
   }
   DownloadExpedient(varia){
      this.recipe.DowenloadDiet();
    }
  }


