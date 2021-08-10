import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.scss'],
})
export class ModalPerfilComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  regresar() {
    this.modalCtrl.dismiss();
  }
}
