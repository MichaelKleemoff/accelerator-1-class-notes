// OBJECTS

// objects are a reference type 
    //  objects REFER to something - objects point to something else
    
    // if we declar a var it get some space somewhere in memory
        // this string is what kind of data type?  Primitive data type
            // that means it EXISTS its there until the memory is specifically reallocated - we dont do this usually
            // primitives are immutable - meaning we cant change em
let myStr = "hello accelerator"
// here we just created a BRAND NEW STRING IN MEMORY  - and set our myStr varaible to point to it
myStr = "good night accelerator"

// how many strings are in memory? we have two strings in memory 
    // how many varaibles do we have? 1 called myStr

// think of varaibles as little signs that point to things in memory

// think of a reference type as a collection of individual variables
// why do this?
    // we want to group related things
        // this makes it easier to track things and deal with data

// im actually not 100% sure when the JS garbage collector gets rid of the strings at an object

let myObj = {
    name: "Tim Mckiernan",
    role: "Coach @ Pursuit",
    home: "Ridgewood"
}

// when we update a value how do we SET a new property with an object?
    // how do we update our value ?  we want to move to "Jackson Heights"
 
myObj.home = "Harlem" 

myObj.scheduele = "Nights && Weekends"
// remember all object keys are strings 
    // if we dont pass a string we get an error
const key = "yearsAtPursuit"
// dot notation will always conver whatever follows the `.` to a string
myObj[key] = 3
//bracket notation lets us pass VARAIBLES or strings directly
// each array has keys that are strings, the only difference is they iterate and increase by 1

/*
    myArr = {
        0:1,
        1:2,
        3:3
    }
*/
// we are asking for the type of the variable => returns a string


console.log(myObj)

// itterating over object is essential in all JS develpoment

// if i want the keys in an object there are many ways to do it

// this can sometimes get us more than we bargain for
// for (let key in myObj) {
//     console.log(key)
// }

for (let key of Object.keys(myObj)) {
    // console.log(key)
}
// Oject - is something called the "Global Object"
    // there is one main Object in JS that allows us to do certain tasks involving objects


let keys = Object.keys(myObj);

let vals = Object.values(myObj);


console.log(keys)
console.log(vals)

// lets iterate over an array and use an object to store our values


// lets say we want to count how many times a number appears in the array

// memoizing our results
function getMostCommonNum (nums) {
    // store vals seen and how many times seen
    let numsSeen = {};
    for (let num of nums) {
        if (numsSeen[num]) {
            numsSeen[num] += 1
        } else {
            numsSeen[num] = 1
        }
    }
    let highestKey = "" // 1
    let highestSoFar = -Infinity; // 4
    for(let key of Object.keys(numsSeen)) {
        if( numsSeen[key] > highestSoFar) {
            highestSoFar = numsSeen[key];
            highestKey = key
        }
    }
    return highestKey
}


        
const myArr = [1,1,1,1,2,2,3,4,9,9,9,9,9,9,9,9]
console.log(getMostCommonNum(myArr))

    
