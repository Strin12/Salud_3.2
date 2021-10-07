import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { BloodpresureService } from 'src/app/services/bloodpresure.service';
import { LoginService } from 'src/app/services/login.service';
import { Blood } from '../interfaces/blood';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 blood: any;
 bloodpres: Blood = new Blood();
  constructor(private bloodPresureService: BloodpresureService, private toasController: ToastController,
    private loginService:LoginService) {}

  ngOnInit() {}
guardar(form: NgForm){
  if (form.invalid) {
    this.ValidToast();
    return;
  }
  this.bloodpres.persons_id = this.loginService.leer_id();
  this.bloodPresureService.insert(this.bloodpres).subscribe(
    resp => {
      this.presentToast();
    },erro =>{
      this.ErrorToast();
    }
  );
  form.reset();
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
