import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/pages/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.scss'],
})
export class ModalPerfilComponent implements OnInit {
user: User = new User();
@Input() uuid;
  constructor(private modalCtrl: ModalController, private loginServices:LoginService) { }

  ngOnInit() {  
    this.uuid = this.loginServices.leer_uuid();
    this.loginServices
    .edit(this.uuid)
    .pipe(
      map((res: any) => {
        this.user = res;
        console.log(this.user);
        return this.user;
      })
    )
    .subscribe();
  }
  regresar() {
    this.modalCtrl.dismiss();
  }
}
