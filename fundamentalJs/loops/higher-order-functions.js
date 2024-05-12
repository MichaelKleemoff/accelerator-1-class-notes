
/* type user {
    name:string
    email:string
    userId:number
 }
*/


// Callback Functions - Basics
  // what is a callback function?
    // a function that is PASSED to another function OR returned from another function
      // const [whatever, setWhatever] = useState()
  
// what the hell does that mean?  what does it mean to pass a function to another function?

// lets modeal a gym classroom
  // executeClass(price, classToTeach:function ) {

 // }

  // yogaClass(mats, inscense, music, instructor) {
    //  
  // }

  // zumbaClass(upbeatMusic, liveMusciain, )

// restuaruant(menu, food, hours, specifics:function) {
  // each resturaunt has a menu, food, hours
// }

// Amazon and we need tomake a front end CARD component for every product
  // vacuum()
  // toaster()
  // blender()
// createProductCard( product:function ) {
    // thingToSell = product()
    // return newCardForThingToSell
//}

// COMBINE
function add(a,b) {
  return a + b
}

function multiply(a,b) {
  return a * b
}
  // we declared locally whatTheHellWeWantToDo
function combine(a, b, whatTheHellWeWantToDo) {
  return whatTheHellWeWantToDo(a,b)
}

console.log( combine(1,2, multiply))

function sayHello() {
    console.log('hello')
  }

function sayGoodbye() {
    console.log("goodbye")
}
  // the call back tell us what the hell we wanna do
    // SINGLE RESPONSIBILITY PRINCIPLE  => whats set timeout do 
      // the callback is WHAT WE NEED IT TO ACTUALL DO
        // these are the orders
  const coolMessage = "whooooa"

  setTimeout(() => {
    console.log("HELLO WE WAITED HOORAY", coolMessage)
  }, 5000)
  // HIGHER ORDER ARRAY METHODS
    // these are methods on arrays - and they were included in JS because PEOPLE DO THIS A LOT
      // each one of these is an abstract concept - and each one needs its own callback
      let users = [
        {
          name: "Oziel",
          email: "Oziel@pursuit.org",
          userId: 24601
        },
        {
          name: "Senka",
          email: "Senka@pursuit.org",
          userId: 38217
        },
        {
          name: "Erika",
          email: "Erika@pursuit.org",
          userId: 18104
        },
        {
          name: "Evan",
          email: "Evan@pursuit.org",
          userId: 78293
        }
      ]
    
  // MAP - this function iterates over an array and creates and returns a new array that is transformed based on the callback provided

const userEmails = users.map((user) => { 
  const newPerson = { 
    email: user.email, 
    name: user.name
  }
  return newPerson
})

console.log(userEmails)
  
  // FILTER - like the name says - fitlers stuff form the returned array

const nums = [1,2,3,5,6,7,8];

const aboveFive = nums.filter(num => num > 5)

console.log(aboveFive)
  
  // FOR EACH - is it does not return a new array - it only perfroms side effects
// for of vs arr[i]
nums.forEach((num, index) => {
  console.log(num)
  nums[index] *= 2
})

console.log(nums)


  // FIND





  // SOME 


  // EVERY



  
  //