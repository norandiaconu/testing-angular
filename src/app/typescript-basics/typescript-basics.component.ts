import { Component, OnInit } from "@angular/core";

@Component({
  selector: "typescript-basics",
  templateUrl: "./typescript-basics.component.html",
  styleUrls: ["./typescript-basics.component.scss"]
})
export class TypescriptBasicsComponent implements OnInit {
  subscribed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.subscribed = false;
  }

  multiplier(): void {
    function multiply(a: number, b: number = 5): number {
      return a * b;
    }

    console.log(multiply(5, 10));
    console.log(multiply(5));
  }

  createOrder(): void {
    const pizza = {
      name: "Pepperoni",
      price: 15,
      getName: function(): string {
        return this.name;
      }
    };
    const toppings = ["pepperoni"];

    function makeOrder(pizzaParam: any, toppingsParam: Array<string>): any {
      return { pizzaParam, toppingsParam };
    }

    console.log(makeOrder(pizza, toppings));
    console.log(pizza.getName());
  }

  sumAll(): void {
    function addAll(message: string, ...arr: Array<number>): number {
      console.log(message);
      console.log(arguments);
      return arr.reduce((prev, next) => prev + next);
    }

    console.log(addAll("Hello", 1, 2, 3));
  }

  concatArrays(): void {
    const toppings = ["bacon", "chili"];
    const newToppings = ["pepperoni"];
    const allToppings = [...toppings, ...newToppings];

    console.log(allToppings);
  }

  spreadOperator(): void {
    const pizza = { name: "Pepperoni"};
    const toppings = ["Pepperoni"];
    const spreadOrder = { ...pizza, toppings};

    console.log(spreadOrder);
  }

  destructure(): void {
    const pizza = {
      name: "Pepperoni",
      toppings: ["Pepperoni"]
    };
    // tslint:disable-next-line: no-shadowed-variable
    function order({ name: pizzaName, toppings: pizzaToppings }: any): any {
      return { pizzaName, pizzaToppings };
    }
    console.log(order(pizza));
    const { pizzaName } = order(pizza);
    console.log(pizzaName);

    const toppings = ["pepperoni", "bacon", "chili"];
    const [first, second, third] = toppings;
    console.log(first, second, third);

    // tslint:disable-next-line: no-shadowed-variable
    function logToppings([first, second, third]: any): void {
      console.log(first, second, third);
    }
    logToppings(toppings);
  }

  allowNull(): void {
    let coupon: string | null = "pizza";
    function removeCoupon(): void {
      coupon = null;
    }
    console.log(coupon);
    removeCoupon();
    console.log(coupon);
  }

  literalTypes(): void {
    let pizzaSize = "small";
    function selectSize(size: "small" | "medium" | "large"): void {
      pizzaSize = size;
    }
    console.log(pizzaSize);
    selectSize("large");
    console.log(pizzaSize);
  }

  functionTypes(): void {
    let sumOrder: (price: number, quantity: number) => number;
    sumOrder = (x, y) => x * y;
    const sum = sumOrder(25, 2);
    console.log(sum);
  }

}
