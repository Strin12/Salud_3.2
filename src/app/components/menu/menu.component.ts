import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/pages/interfaces/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  titulo: string;

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();

  }
}
