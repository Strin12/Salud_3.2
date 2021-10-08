import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
datos: any;
  constructor(private loginService:LoginService) {}

  ngOnInit() {
  this.blood();
  }
blood(){
  var token = this.loginService.leer_tokengoogle();
    this.loginService.getFitnes(token).subscribe(
      resp =>{
          this.datos = resp;
          console.log(this.datos);
      }
    );
}

}
