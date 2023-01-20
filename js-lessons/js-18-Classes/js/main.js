// Classes
// ES6 (2015)
// JS class is syntactic sugar, as in doesn't change anything fundamental in JS
// It is a different way of laying out your code and features.

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    // setting getter and setter to be used with dot notation
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    // common way of setting getter and setter using methods
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("pepperoni", "small");

myPizza.pizzaCrust = "thin";
myPizza.bake();
console.log(myPizza.pizzaCrust);

myPizza.setCrust("cheese");
myPizza.bake();
console.log(myPizza.getCrust());

myPizza.setToppings("mushrooms");
myPizza.setToppings("tomatos");
myPizza.setToppings("salami");
myPizza.bake();
console.log(myPizza.getToppings());






