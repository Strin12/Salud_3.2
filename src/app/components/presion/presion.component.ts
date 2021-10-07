import { Component, Input, OnInit } from '@angular/core';
import { Blood } from 'src/app/pages/interfaces/blood';
import { BloodpresureService } from 'src/app/services/bloodpresure.service';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.component.html',
  styleUrls: ['./presion.component.scss'],
})
export class PresionComponent implements OnInit {
  blood:any;
  constructor(private bloodPresureService: BloodpresureService) { }

  ngOnInit() {
    this.bloodPresureService.list().subscribe(
      resp =>{
        this.blood = resp;
      }
    );
  }

}
