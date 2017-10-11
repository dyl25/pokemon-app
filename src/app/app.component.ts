import {Component} from '@angular/core';

@Component({
    selector: 'pokemon-app',
    template: `
    <nav>
        <div class="nav-wrapper teal">
            <a href="#" class="brand-logo center" >Pokemon-app</a>
        </div>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {}
