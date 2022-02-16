"use strict";

const { MarkovMachine } = require("./markov.js");

describe("get chain function", function () {

    const words = "The cat is in the hat. The cat is the cat. The hat is a cat."
    let testMachine = new MarkovMachine(words);

    test("return chain (Map object) of words", function () {
        const chains = testMachine.getChains();
        
        //CODE REVIEW Can do thsi with better syntax. Array of arrays.
        [["The", ["cat", "cat", "cat"]]]
        const newMap = new Map();
        newMap.set("The", ["cat", "cat", "hat"]);
        newMap.set("cat", ["is", "is"]);
        newMap.set("is", ["in", "the", "a"]);
        newMap.set("in", ["the"]);
        newMap.set("the", ["hat.", "cat."]);
        newMap.set("hat.", ["The"]);
        newMap.set("cat.", ["The", null]);
        newMap.set("hat", ["is"]);
        newMap.set("a", ["cat."]);

        console.log(chains);
        console.log(newMap);

        expect(chains).toEqual(
            newMap
        )
    });
})

// describe("get text function"), function () {

//     const words = "The cat is in the hat."
//     let testMachine = new MarkovMachine(words);
//     const chains = testMachine.getChains();

//     test("return text of random words from chains", function() {
//         let text = 
//     })
// }