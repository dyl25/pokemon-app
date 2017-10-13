import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
    template: `
    <div class='row'>
        <div class="col s12 m4 offset-m4">
            <div class="card hoverable">

              <div class="card-content">
                  <span class="card-title">Page de connexion</span>
                  <p><em>{{message}}</em></p>
              </div>

              <div class="card-action">
                <a (click)="login()"  *ngIf="!authService.isLoggedIn">Se connecter</a>
                <a (click)="logout()" *ngIf="authService.isLoggedIn">Se déconnecter</a>
              </div>
            </div>
        </div>
    </div>
    `
})
export class LoginComponent {
    message: string;

    constructor(private authService: AuthService, private router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = this.authService.isLoggedIn ? 'Vous êtes connecté.' : 'Vous êtes déconnecté';
    }

    login() {
        this.message = 'Tentative de connexion en cours ...';

        this.authService.login().subscribe(() => {
            this.setMessage();

            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
                this.router.navigate([redirect]);
            }
        });
    }
    
    logout() {
        this.authService.logout();
        this.setMessage;
    }
}

