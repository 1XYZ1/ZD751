import { Component, OnInit } from "@angular/core";
declare function init_plugins();
@Component({
  selector: "app-juego",
  templateUrl: "./juego.component.html",
  styleUrls: ["./juego.component.scss"],
})
export class JuegoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    init_plugins();
  }
}
