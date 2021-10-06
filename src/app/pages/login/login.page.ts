import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { SocialAuthService } from "angularx-social-login";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from "angularx-social-login";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user: any;

  constructor(
    private authService: SocialAuthService,
    private route: Router,
    private loginService: LoginService,
    private toasController: ToastController
  ) {}

  googleLoginOptions = {
    scope: "email",
  };

  ngOnInit() {}

  Login(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions)
      .then((res) => {
        this.user = res;
        console.log("google", this.user);
        this.loginService.login(this.user).subscribe(
          (respuesta) => {
            this.loginService.guardar_token(respuesta["token"]);
            this.loginService.guardar_nombre(respuesta["users"]["name"]);
            this.loginService.guardar_email(respuesta["users"]["email"]);
            this.loginService.guardar_rol(respuesta["users"]["roles"]["name"]);
            this.loginService.guardar_uuid(
              respuesta["users"]["persons"]["uuid"]
            );
            this.loginService.guardar_id(respuesta["users"]["persons"]["_id"]);

            this.presentToast();
            this.route.navigateByUrl("tabs/inicio");
          },
          (error) => {
            this.ErrorToast();
          }
        );
      })
      .catch((err) => console.error(err));
  }

  async presentToast() {
    const toast = await this.toasController.create({
      message: "Bienvenido",
      duration: 800,
      position: "middle",
    });
    toast.present();
  }
  async ErrorToast() {
    const toast = await this.toasController.create({
      message: "El usuario no existe o no tiene permisos",
      duration: 800,
      position: "middle",
    });
    toast.present();
  }
}
