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
      }
    );
    this.recipe.getinquieries().subscribe(
      resp => {
        this.inquiries = resp;
      }
    );
  }
  returnExpedient(varia){
     this.recipe.historialget(varia);
   }
   DownloadExpedient(varia){
      this.recipe.Dowenloadhistorial(varia);
    }


}
