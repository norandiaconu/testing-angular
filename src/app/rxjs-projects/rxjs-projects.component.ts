import { Component, OnInit } from "@angular/core";
import { fromEvent, timer, Subscription, combineLatest, of } from "rxjs";
import { exhaustMap, switchMapTo, pluck, takeUntil, map, filter, tap, share } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "rxjs-projects",
  templateUrl: "./rxjs-projects.component.html",
  styleUrls: ["./rxjs-projects.component.scss"]
})
export class RxjsProjectsComponent implements OnInit {
  subscribed: boolean;
  timeSub: Subscription;
  polling: boolean;

  constructor() { }

  ngOnInit(): void {
    this.subscribed = false;
    this.polling = false;
  }

  dogSub(): void {
    if (this.subscribed === false) {
      const dogImage = (document.getElementById("dog") as HTMLImageElement);
      const dogVideo = (document.getElementById("dogVid") as HTMLVideoElement);
      this.timeSub = fromEvent(document.getElementById("dogStart"), "click").pipe(
        exhaustMap(() => timer(0, 5000).pipe(
          switchMapTo(ajax.getJSON("https://random.dog/woof.json").pipe(
            pluck("url")
          )),
          takeUntil(fromEvent(document.getElementById("dogStop"), "click"))
        ))
      ).subscribe((url: string) => {
        if (url.includes(".mp4")) {
          dogVideo.src = url;
        } else {
          dogImage.src = url;
        }
      });
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }

  dogStart(): void {
    if (this.polling === false) {
      this.polling = true;
    }
  }

  dogStop(): void {
    if (this.polling === true) {
      this.polling = false;
    }
  }

  calculateMortgage(interest: number, loanAmount: number, loanLength: number): string {
    const calculatedInterest = interest / 1200;
    const total = loanAmount *
      calculatedInterest / (1 - (Math.pow(1 / (1 + calculatedInterest), loanLength)));
    return total.toFixed(2);
  }

  mortgageSub(): void {
    if (this.subscribed === false) {
      const loanAmount = document.getElementById("loanAmount");
      const interest = document.getElementById("interest");
      const loanLength = document.querySelectorAll(".loanLength");
      const expected = document.getElementById("expected");
      const createInputValueStream = elem => {
        return fromEvent(elem, "input").pipe(
          map((event: any) => parseFloat(event.target.value))
        );
      };
      const interest$ = createInputValueStream(interest);
      const loanLength$ = createInputValueStream(loanLength);
      const loanAmount$ = createInputValueStream(loanAmount);

      /*const observable = combineLatest([interest$, loanAmount$, loanLength$]).pipe(
        map(([interestTemp, loanAmountTemp, loanLengthTemp]) => {
          return this.calculateMortgage(interestTemp, loanAmountTemp, loanLengthTemp);
        }),
        tap(console.log),
        filter(mortgageAmount => !isNaN(Number(mortgageAmount))),
        share()
      );
      observable.subscribe(mortgageAmount => {
        expected.innerHTML = mortgageAmount;
      });
      observable.pipe(
        mergeMap(mortgageAmount => of(mortgageAmount).pipe(delay(1000)))
      ).subscribe();*/

      this.timeSub = combineLatest([interest$, loanAmount$, loanLength$]).pipe(
        map(([interestTemp, loanAmountTemp, loanLengthTemp]) => {
          return this.calculateMortgage(interestTemp, loanAmountTemp, loanLengthTemp);
        }),
        tap(console.log),
        filter(mortgageAmount => !isNaN(Number(mortgageAmount))),
        share()
      ).subscribe(mortgageAmount => {
        expected.innerHTML = mortgageAmount;
      });
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }

}
