import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { Ps4Component } from "./pages/ps4/ps4.component";
import { Ps3Component } from "./pages/ps3/ps3.component";
import { CardsComponent } from "./pages/cards/cards.component";
import { TutorialComponent } from "./pages/tutorial/tutorial.component";
import { JuegoComponent } from "./pages/juego/juego.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Ps4Component,
    Ps3Component,
    CardsComponent,
    TutorialComponent,
    JuegoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
