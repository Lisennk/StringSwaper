import StringSwaper from "../src/StringSwaper";

let swaper = new StringSwaper;

// Original string
let context:string = `I like tea, but my friend likes coffee`;

// Lets swap
let result:string = swaper.swap('tea', 'coffee', context);

// Now result is 'I like coffee, but my friend likes tea'