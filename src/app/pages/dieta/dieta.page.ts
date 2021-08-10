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
  returnExpedient(varia){
    console.log(varia);
     this.recipe.returnDiet();
   }
   DownloadExpedient(varia){
     console.log(varia);
      this.recipe.DowenloadDiet();
    }
  }


