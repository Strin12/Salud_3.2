import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private plataform: Platform,
              private authService: SocialAuthService,
              private router: Router) {
                this.initializeApp();
              }
              signInWithGoogle(): void {
                this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
              }
            
              signInWithFB(): void {
                this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
              }
            
              signOut(): void {
                this.authService.signOut();
              }
              refreshToken(): void {
                this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
              }
              ngOnInit() {
                this.authService.authState.subscribe((user) => {
                  this.user = user;
                  this.loggedIn = (user != null);
                });
              }
              


   initializeApp(){
     this.plataform.ready().then(() =>{
       this.router.navigateByUrl('splash');
     })
   }           
}
