import { Component, Input, OnInit } from '@angular/core';
import { Domicilio } from 'src/app/pages/interfaces/domicilio';
import { DomicilieService } from 'src/app/services/domicilie.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-datos-domicilio',
  templateUrl: './datos-domicilio.component.html',
  styleUrls: ['./datos-domicilio.component.scss'],
})
export class DatosDomicilioComponent implements OnInit {
  @Input() dato: boolean = false;
domicile: Domicilio = new Domicilio();
@Input() id:any;
datos:boolean = false;
  constructor(private domicileServices:DomicilieService) { }

  ngOnInit() {
    this.domicileServices
    .list(this.id)
    .pipe(
      map((res: any) => {
        this.domicile = res;
        console.log(this.domicile);
        this.datos = true;
        return this.domicile;
      },error =>{
        this.datos = false;
      })
    )
    .subscribe();
  }


}
