import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ModalPerfilComponent } from './modal-perfil/modal-perfil.component';
import { DatosPerfilComponent } from './datos-perfil/datos-perfil.component';
import { DatosDomicilioComponent } from './datos-domicilio/datos-domicilio.component';
import { PresionComponent } from './presion/presion.component';
import { OxigenacionComponent } from './oxigenacion/oxigenacion.component';
import { DatosHistorialComponent } from './datos-historial/datos-historial.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ModalPerfilComponent,
    DatosPerfilComponent,
    DatosDomicilioComponent,
    PresionComponent,
    OxigenacionComponent,
    DatosHistorialComponent,
  
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    ModalPerfilComponent,
    DatosPerfilComponent,
    DatosDomicilioComponent,
    PresionComponent,
    OxigenacionComponent,
    DatosHistorialComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
    ]
})
export class ComponentsModule { }
