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
        console.log(this.datos);
      var data = resp['dataSource'];
      var dsname = [];
      for (let i = 0; i < data.length; i++) { 
        dsname.push(data[i].dataStreamId);
      }

      }
    );
}

}
