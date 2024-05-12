/* 
        LOOPS!
        a loop is the fundamental engine of code
           **** many problems require a loop
                sometimes its easier to solve the problem without it
                    then use your solution in a loop
        Why do we use loops?
            We use a loop in our code when we need to do something agian and again
        
            examples:
                if we have an array and we want to filter out elements
                    we need to see what the elements are to see if they get filtered
                
                accumulator - getting info from an array - or even a string - we loop over something and store the values in something else

                we could loop over an array of numbers and add them
                    we accumulate at ever step
                we could accumulate a new string 
                    we can loop over some thing and store the values in a new string
*/


// while loop
    // a while loop will continue to execute WHILE the condition is true
console.log("starting funciton")
let index = 0;
// declare a while loop => while()
    // inside the parens is the condition
        // this will execute WHILE the condition is true
            // < will resolve to TRUE or FALSE
while (index <= 100) {
    console.log(index)
    index += 50
}

let myArr = [true, true, true, false]
let otherIndex = 0; //1 
// we have to set our conditional to target an item in the array
    // while (false)
while( otherIndex < myArr.length ) {
    console.log(myArr[otherIndex]);
    otherIndex += 1
}
// why does a for loop have three parts?
    // start       when to end   what to increment
for (let i = 0; i < myArr.length; i++) {}

let arr2 = ["hello", "accel", "one"]
// for of is for ITERABLES - mostly we use it on arrays
// for of ALWAYS iterates by 1
let caps = []
for (let str of arr2) {
    // we create a NEW VARIABLE CALLED STR
        // this ONLY EXISTS IN THIS SCOPE
    // for of creates a new var in the scope
     str = str.toUpperCase()
     caps.push(str)
     console.log(str)
}

console.log(arr2)

for (let i = 0; i < arr2.length; i ++) {
    arr2[i] = arr2[i].toUpperCase()
}
console.log(arr2, "second time!@#!@")


let myObj = { 
    "first": "tim", 
    "last":"mckiernan", 
    "location":"tim's house"
}

for (let key in myObj) {
    // gets the keys
    console.log(key)
    // how do we get the val?
        // where are the vals we want?
    console.log(myObj[key])
}

for (let key of Object.keys(myObj)) {
    console.log(myObj[key], " !!!!!")
}