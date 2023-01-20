// Classes Example 3: Factory Function

/* class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;   // the underscore prefix means it is private properties
        this._crust = "original"; // should only be modified within the class not outside
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}
 */

function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza =  pizzaFactory("small");
myPizza.bake();
 