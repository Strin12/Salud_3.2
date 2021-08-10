import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.scss'],
})
export class DatosPerfilComponent implements OnInit {
  @Input() dato: boolean = false;
@Input() user:any;
  constructor() { }

  ngOnInit() {}

}
