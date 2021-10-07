import { Component, OnInit } from '@angular/core';
import { SheduleService } from 'src/app/services/shedule.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
citas: any
datos:any;
  constructor(private sheduleServices: SheduleService) { }

  ngOnInit() {
    this.sheduleServices.listfalse().subscribe(
      resp =>{
        this.citas = resp;
      }
    );
  }

}
