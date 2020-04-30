import { Component, OnInit } from "@angular/core";
declare function init_plugins();
@Component({
  selector: "app-ps3",
  templateUrl: "./ps3.component.html",
  styleUrls: ["./ps3.component.scss"],
})
export class Ps3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    init_plugins();
  }
}
