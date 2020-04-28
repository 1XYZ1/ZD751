import { Component, OnInit } from "@angular/core";
declare function init_plugins();
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    init_plugins();
  }
  title = "zd";
}
