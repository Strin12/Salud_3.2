import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPerfilComponent } from 'src/app/components/modal-perfil/modal-perfil.component';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
dato: boolean = false;
uuid:any;
user: User = new User();
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

  ChangeDomicilie(){
    this.dato = true;
  }
  ChangePerfil(){
    this.dato = false;
  }
  async EditPerfil(){
    const modal = await this.modalCtrl.create({
      component: ModalPerfilComponent,
    });

    modal.present();

  }
}
