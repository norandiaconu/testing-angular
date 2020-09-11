import { Component } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  logo = "assets/logo.svg";
  name = "";
  display = false;
  nav: Nav[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/oops",
      name: "404",
      exact: false
    },
    {
      link: "/passengers",
      name: "Passengers",
      exact: false
    },
    {
      link: "/rxjs-basics",
      name: "RxJS Basics",
      exact: false
    },
    {
      link: "/rxjs-projects",
      name: "RxJS Projects",
      exact: false
    },
    {
      link: "/typescript-basics",
      name: "TypeScript Basics",
      exact: false
    },
    {
      link: "/angular-pro",
      name: "Angular Pro",
      exact: false
    }
  ];

  constructor() {
    this.title = "Ultimate Angular";
  }

  handleInput(event: any): void {
    this.title = event.target.value;
  }
  handleBlur(event: any): void {
    this.title = event.target.value;
    console.log(event);
  }
  handleClick(): void {
    this.title = "Angular";
  }
  handleChange(value: string): void {
    this.title = value;
    console.log(value);
  }
  handleNameChange(value: string): void {
    this.name = value;
  }
  toggle(): void {
    this.display = !this.display;
  }
  
}
