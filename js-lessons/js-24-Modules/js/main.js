// Modules
// using modules implies using use-strict; and defer loading

import * as Guitars from "./guitars.js";
import User from "./user.js";

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("Dave@email.com", "David");
console.log(me);
console.log(me.greeting());

/*  === declaring import for external source
import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking } from "./guitars.js";

console.log(playGuitar());
console.log(shred());
console.log(fingerpicking());
 */
