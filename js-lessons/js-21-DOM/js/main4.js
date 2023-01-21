// Classes Example 4: Classes with public/private field (2020)

class Pizza {
    crust = "original";   // public field
    #sauce = "traditional"; // private field, both declared above the constructor
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;        
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.getCrust());
console.log(myPizza.sauce);



/* Class workaround with function factory pattern ===

function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza =  pizzaFactory("small");
myPizza.bake();
  */