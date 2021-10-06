import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { Domicilio } from "src/app/pages/interfaces/domicilio";
import { DomicilieService } from "src/app/services/domicilie.service";
import { LoginService } from "src/app/services/login.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-modal-domicilio",
  templateUrl: "./modal-domicilio.component.html",
  styleUrls: ["./modal-domicilio.component.scss"],
})
export class ModalDomicilioComponent implements OnInit {
  @Input() domicilio: Domicilio = new Domicilio();
  persons_id: any;
  datos: any;
  constructor(
    private domicilioServices: DomicilieService,
    private toasController: ToastController,
    private modalCtrl: ModalController,
    private loginServices: LoginService
  ) {}

  ngOnInit() {
    this.persons_id = this.loginServices.leer_id();
    this.domicilioServices.list(this.persons_id).subscribe(
      (resp) => {
        this.datos = resp;
        if (this.datos.persons_id != null) {
          this.domicilioServices
            .edit(this.datos.uuid)
            .pipe(
              map(
                (res: any) => {
                  this.domicilio = res;
                  return this.domicilio;
                },
                (error) => {}
              )
            )
            .subscribe();
        }
      },
      (erro) => {
        return;
      }
    );
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log("Formulario no valido");
      this.ValidToast();
      return;
    }
    if (this.domicilio.uuid) {
      this.domicilioServices.Update(this.domicilio).subscribe(
        (resp) => {
          this.presentToast();
        },
        (error) => {
          this.ErrorToast();
        }
      );
    } else {
      this.domicilio.persons_id = this.loginServices.leer_id();
      this.domicilioServices.insert(this.domicilio).subscribe(
        (resp) => {
          this.presentToast();
        },
        (error) => {
          this.ErrorToast();
        }
      );
    }
    this.regresar();
  }
  async ErrorToast() {
    const toast = await this.toasController.create({
      message: "Ocurrio un error verifique sus datos",
      duration: 800,
      position: "middle",
    });
    toast.present();
  }

  async presentToast() {
    const toast = await this.toasController.create({
      message: "Se actualizaron los datos correctamente",
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
  regresar() {
    this.modalCtrl.dismiss();
  }
  listdomicilio() {
    this.persons_id = this.loginServices.leer_id();
    this.domicilioServices
      .list(this.persons_id)
      .pipe(
        map(
          (res: any) => {
            this.domicilio = res;
            return this.domicilio;
          },
          (error) => {}
        )
      )
      .subscribe();
  }
}
