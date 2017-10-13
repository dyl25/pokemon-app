import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { AppRoutingModule }         from './app-routing.module';
import { HttpModule }               from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { InMemoryDataService }      from './in-memory-data.service';
import './rxjs-extensions';

import { PokemonsModule }           from './pokemons/pokemons.module';

import { AppComponent }             from './app.component';
import { PageNotFoundComponent }    from './page-not-found.component';
import { LoginComponent }           from './login.component';
import { LoginRoutingModule }       from './login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
