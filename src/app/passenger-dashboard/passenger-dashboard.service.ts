import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Passenger } from "./passenger";

const path  = "http://localhost:3000/passengers";

@Injectable({
  providedIn: "root"
})
export class PassengerDashboardService {

  constructor(private httpClient: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(path);
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.httpClient.get<Passenger>(path + "/" + id);
  }

  getPassengerPromise(): Promise<Passenger> {
    return this.httpClient.get<Passenger>(path + "/1").toPromise();
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(path + "/" + passenger.id, passenger);
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.delete<Passenger>(path + "/" + passenger.id);
  }

  
}
