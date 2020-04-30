import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { Ps3Component } from "./pages/ps3/ps3.component";
import { Ps4Component } from "./pages/ps4/ps4.component";
import { CardsComponent } from "./pages/cards/cards.component";
import { TutorialComponent } from "./pages/tutorial/tutorial.component";
import { JuegoComponent } from "./pages/juego/juego.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "ps3", component: Ps3Component },
  { path: "ps4", component: Ps4Component },
  { path: "cards", component: CardsComponent },
  { path: "tutorial", component: TutorialComponent },
  { path: "juego", component: JuegoComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
