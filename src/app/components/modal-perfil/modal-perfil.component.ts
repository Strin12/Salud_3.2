import { Component, Input, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { User } from "src/app/pages/interfaces/user";
import { LoginService } from "src/app/services/login.service";
import { map } from "rxjs/operators";
import { NgForm } from "@angular/forms";
import { HospitalesService } from "src/app/services/hospitales.service";
@Component({
  selector: "app-modal-perfil",
  templateUrl: "./modal-perfil.component.html",
  styleUrls: ["./modal-perfil.component.scss"],
})
export class ModalPerfilComponent implements OnInit {
  uuid: any;
  user: User = new User();
  photo: any;
  hospitals: any;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.jpeg",
    maxSize: "500",
    uploadAPI: {
      url:
        this.loginServices.url +
        "patients/upload?token=" +
        this.loginServices.leer_token(),
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      attachPinBtn: "Editar foto de perfil",
    },
  };
  constructor(
    private modalCtrl: ModalController,
    private loginServices: LoginService,
    private toasController: ToastController,
    private hospitalService: HospitalesService
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

    this.hospitalService.list().subscribe((resp) => {
      this.hospitals = resp;
    });
  }
  regresar() {
    this.modalCtrl.dismiss();
  }
  imagenupload(datos) {
    this.photo = datos;
    this.user.photo = this.photo.body.imagen;
  }
  guardar(from: NgForm) {
    if (from.invalid) {
      this.ValidToast();
      return;
    }
    this.loginServices.Update(this.user).subscribe(
      (resp) => {
        this.presentToast();
      },
      (erro) => {
        this.ErrorToast();
      }
    );
  }

  async presentToast() {
    const toast = await this.toasController.create({
      message: "Se actualizaron los datos correctamente",
      duration: 800,
      position: "middle",
    });
    toast.present();
  }
  async ErrorToast() {
    const toast = await this.toasController.create({
      message: "Ocurrio un error verifique sus datos",
      duration: 800,
      position: "middle",
    });
    toast.present();
  }
  async ValidToast() {
    const toast = await this.toasController.create({
      message: "Falta un campo por agregar",
      duration: 800,
      position: "middle",
    });
    toast.present();
  }
}
