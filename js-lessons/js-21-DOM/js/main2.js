// Classes Example 2: Super Class
// ES6 (2015)
// JS class is syntactic sugar, as in doesn't change anything fundamental in JS
// It is a different way of laying out your code and features.

class Pizza {
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

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();

