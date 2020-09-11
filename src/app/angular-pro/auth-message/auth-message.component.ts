import { Component, OnInit } from "@angular/core";

@Component({
  selector: "auth-message",
  templateUrl: "./auth-message.component.html",
  styleUrls: ["./auth-message.component.scss"]
})
export class AuthMessageComponent implements OnInit {
  days: number;

  constructor() {
    this.days = 7;
  }

  ngOnInit(): void {
  }

}
