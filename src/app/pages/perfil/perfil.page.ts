import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { ModalPerfilComponent } from "src/app/components/modal-perfil/modal-perfil.component";
import { LoginService } from "src/app/services/login.service";
import { User } from "../interfaces/user";
import { map } from "rxjs/operators";
import { ModalDomicilioComponent } from "src/app/components/modal-domicilio/modal-domicilio.component";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"],
})
export class PerfilPage implements OnInit {
  dato: boolean = false;
  uuid: any;
  user: User = new User();
  constructor(
    private modalCtrl: ModalController,
    private loginServices: LoginService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.uuid = this.loginServices.leer_uuid();
    this.loginServices
      .edit(this.uuid)
      .pipe(
        map((res: any) => {
          this.user = res;
          return this.user;
        })
      )
      .subscribe();
  }

  ChangeDomicilie(id: any) {
    this.dato = true;
    this.presentLoading();
  }
  ChangePerfil() {
    this.dato = false;
  }
  async EditPerfil(uuid: any) {
    const modal = await this.modalCtrl.create({
      component: ModalPerfilComponent,
    });

    modal.present();
  }
  async EditarDomicilio(persons_id: any) {
    const modal = await this.modalCtrl.create({
      component: ModalDomicilioComponent,
    });

    modal.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Espere unos momentos...",
      duration: 1500,
    });
    await loading.present();
  }
}
