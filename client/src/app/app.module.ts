import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { MatTableModule, MatListModule } from '@angular/material'

//Components
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AccountComponent } from './account/account.component';

//Services
import { PokemonService } from "./services/pokemon.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatListModule,
    MatTableModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }