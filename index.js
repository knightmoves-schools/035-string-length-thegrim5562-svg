let quote = "...ask not what your country can do for you — ask what you can do for your country.";

let quoteLength = quote.length
let twentySecondLetter = quote[21];
let output = `I love baked mac n cheese $[quoteLength] and its taste like [${twentySecondLetter}]`

document.getElementById('result')innerHTML = output;

