import { Component, OnInit } from "@angular/core";

import { PassengerDashboardService } from "../passenger-dashboard.service";
import { Passenger } from "../passenger";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "passenger-viewer",
  templateUrl: "./passenger-viewer.component.html",
  styleUrls: ["./passenger-viewer.component.scss"]
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(
    private passengerDashboardService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onUpdatePassenger(event: Passenger): void {
    console.log(event);
    this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event);
    });
  }

  goBack(): void {
    this.router.navigate(["/passengers"]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Passenger) => {
      console.log(data);
    });
    this.route.params.pipe(
      switchMap((data: Passenger) => this.passengerDashboardService.getPassenger(data.id)))
      .subscribe((data: Passenger) => this.passenger = data);
  }

}
