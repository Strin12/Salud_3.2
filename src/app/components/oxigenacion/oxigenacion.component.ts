import { Component, OnInit } from '@angular/core';
import { BraceletService } from 'src/app/services/bracelet.service';

@Component({
  selector: 'app-oxigenacion',
  templateUrl: './oxigenacion.component.html',
  styleUrls: ['./oxigenacion.component.scss'],
})
export class OxigenacionComponent implements OnInit {
bracelet: any;
  constructor(private braceletServices:BraceletService) { }

  ngOnInit() {
    this.braceletServices.list().subscribe(
      resp =>{
        this.bracelet = resp;
      }
    );
  }

}
