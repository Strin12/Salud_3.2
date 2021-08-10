import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-domicilio',
  templateUrl: './datos-domicilio.component.html',
  styleUrls: ['./datos-domicilio.component.scss'],
})
export class DatosDomicilioComponent implements OnInit {
  @Input() dato: boolean = false;

  constructor() { }

  ngOnInit() {}

}
