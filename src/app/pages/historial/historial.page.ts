import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
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
     this.recipe.historialget(varia);
   }
   DownloadExpedient(varia){
     console.log(varia);
      this.recipe.Dowenloadhistorial(varia);
    }


}
