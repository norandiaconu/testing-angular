import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "auth-remember",
  templateUrl: "./auth-remember.component.html",
  styleUrls: ["./auth-remember.component.scss"]
})
export class AuthRememberComponent implements OnInit {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(value: boolean): void {
    this.checked.emit(value);
  }

}
