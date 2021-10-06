import {Component, Input, OnInit} from '@angular/core';
import {Domicilio} from 'src/app/pages/interfaces/domicilio';
import {DomicilieService} from 'src/app/services/domicilie.service';
import {map} from 'rxjs/operators';
import {LoginService} from 'src/app/services/login.service';

@Component({selector: 'app-datos-domicilio', templateUrl: './datos-domicilio.component.html', styleUrls: ['./datos-domicilio.component.scss']})
export class DatosDomicilioComponent implements OnInit {
    @Input()dato : boolean = false;
    domicilio : Domicilio = new Domicilio();
    @Input()persons_id : any;
    datos : boolean = false;
    constructor(private domicileServices : DomicilieService, private loginServices : LoginService) {}

    ngOnInit() {
        this.persons_id = this.loginServices.leer_id();
        this.domicileServices.list(this.persons_id).pipe(map((res : any) => {
            this.domicilio = res;
            console.log(this.domicilio);
            this.datos = true;
            return this.domicilio;
        }, error => {
            this.datos = false;
        })).subscribe();
    }

}
