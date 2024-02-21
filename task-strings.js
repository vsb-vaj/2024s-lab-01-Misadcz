// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"

// Your code:
 const parametrize = (input) => {
    for(let i = 0; i < input.length; i++) {
    input = input.toLowerCase().replace(' ', '-');
    
    }
    return input;
};

console.log(parametrize("Javascript is the best"));

// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
 const giveSentenceForPerson = (obj) => {
    line = 'Hello ' + obj.name + ' from ' + obj.location + '! It is nice to meet you! You look awesome for your ' + obj.age + ', young ' + obj.position;
    return line;
};

console.log(giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"}))

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
 const replace = (input) => {
    for(let i = 0 ; i < input.length ; i++)
    {
        input = input.replace('a','*');
        input = input.replace('e','*');
        input = input.replace('i','*');
        input = input.replace('o','*');
    }
    console.log(input);
};