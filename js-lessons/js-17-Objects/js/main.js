// Objects
// Key-value pairs in curly braces
// Objects have:
//  - properties as key value pairs
//  - methods as functions that we define within the object

const myObj = { name: "Dave"};
console.log(myObj);

const otherObj = {
    alive : true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning : "Coffee",
        afternoon :  "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}.`;
    }
}
console.log(otherObj.hobbies[1]);
console.log(otherObj["beverage"]);
console.log(otherObj.beverage.morning);
console.log(otherObj.action());


const  vehicle = {
    wheels: 4,
    engine: function() {
        return "VroooOOOMMM!";
    }
};

// We are using generic object `vehicle` as constructor for `truck` object
const truck = Object.create(vehicle);

truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {return "WhoooOOSH!"; };

console.log(car.engine());
console.log(car.wheels);


const band = {
    vocals: "Robert Plan",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

delete band.drums;
console.log(band);
console.log(band.hasOwnProperty("guitar"));


// === Destructuring Objects ===
// we are defining variable by naming the key and the object that we want to pull the variable

const { guitar : myVariable, bass : myBass } = band;
const { vocals, guitar, bass, drums} = band;

console.log(myVariable);
console.log(myBass);

console.log(guitar);
console.log(bass);
console.log(vocals);

// this is awesome destructuring use case
function sings({ vocals }) { return `${vocals} sings!`};
console.log(sings(band));








