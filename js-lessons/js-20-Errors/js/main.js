// Javascript Errors and Error Handling
"use strict";

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd nummber!");
            }
          console.log("Even number!");
        } catch (err) {
          console.error(err.stack);
        } finally {
            console.log("... finally");
            i++;
        }
    }
    
};

makeError();

// you can use custom error function in replacement of standard Error(); function
function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}