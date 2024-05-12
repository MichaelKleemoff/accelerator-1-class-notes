/*

    FUNCTIONS
        is a set of instructions that we can execute again and again;
    WHY ?
        #1 - we dont want to repeat oursleves
            - SCALE - functions allow us to make things DYNAMIC!
            - ABSTRACTION - a well named function can "spare us the details"
            - It helps us organize our thougts - breaking down tough problems into manageable steps
    
    Helper Function 
        if we had a robot that had to clean our house
        we could create one giant funciton
            vacuum and then move to the next room and vacuum and then put the vacuum away and then make the bed  etc
        robotCleansApartment () {
            traverseRooms(myApartment) {
                vaccumRoom(currentRoom)
                makeBeds(beds)
            } - go through all the rooms
            callItADay()
        }
        


        React example:
            useState() <---- what is this? it is a function that RETURNS an array
            how does useState work under the hood?

            we dont need to know how the car AC works - we just need to turn it on
        
    Single Responsibility Principle
        Each fuction should do ONE THING and one thing only
        
    all of this toegether will save us from TECHNICAL DEBT
        code fast now PAY LATER

*/

// if we have an object - this is like a mirror - it can reference itself to use values or properties
        // this.value 
// HOISTING - this allows all functions to declared before anything else is processed
function add(a,b) {
    // 'this' can work here 
    return a + b 
} 
        // this is an anonymous function
        // this is declared - it exist in memory but it doesnt have anything pointing to it
        
const alsoAdd = (a,b) => {
    // the keyword 'this' doesnt quite work the same
    return a + b
}
        
console.log( 10 + alsoAdd(10,12) )
// num is in the GLOBAL SCOPE
let numGlobal = 10;

function itterateNum(num) {
    numGlobal = 1000000000
    num++ // undefined + 1 is NaN
    return num
}

console.log(numGlobal)

let newNum = itterateNum(5)

console.log(numGlobal + newNum)

// SIDE EFFECTS in functions 
    // a side effect EFFECTs something outside of the scope of the funciton
        // and is not the return value

let myNums = [1,2,3,45,5,6,6,7,7,8];

const biggerNums = []
plusOne  = myNums.forEach((num,i) => {
    myNums[i] *= 2
    biggerNums.push(num*2)
})
// this is called a default value or default parameter 
const increaseByAtLeastTwice = (a, b=2) => {
    return a * b
}

console.log(increaseByAtLeastTwice(4,5))
