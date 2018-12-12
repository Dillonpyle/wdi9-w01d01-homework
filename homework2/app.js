//1 easy going

//for (var i = 0; i <= 200; i++) {
//  console.log(i);
//}

//1 get even

//for (var i = 2; i <= 200; i = i + 2) {
//  console.log(i);
//}


// excited kitten

//1 
//for (let i = 1; i <= 20; i++) {
//console.log('love me, pet me! HSSSSS!');
//}

//2

//for (let i = 1; i <= 20; i++) {

// let random = Math.ceil(Math.random() * 3);
//switch (random) {
//  case 1:
//    console.log("...human...why you taking pictures of me?...");
//    break;

//case 2:
//  console.log("...the catnip made me do it...");
//  break;

//case 3:
//  console.log("...why does the red dot always get away...");
//  break;

//default:
//  console.log("Love me, pet me! HSSSSSS!");
//}

//}

// Fizz Buzz

//1
//for (let i = 1; i <= 100; i++) {
//  console.log(i);
//}

//2
//for (let i = 1; i <= 100; i++) {
//  if (i % 3 == 0) console.log("Fizz");
//  else console.log(i);
//}

//3
//for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
//}

//4

//for (let i = 1; i <= 100; i++) {
//  if (i % 15 == 0) console.log("Fizzbuzz");
//  else if (i % 3 == 0) console.log("Fizz");
//  else if (i % 5 == 0) console.log("Buzz");
//  else console.log(i);
//}

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//getting to know you
//1
for (let i = 0; i < shahzad.length; i++) {
    if (shahzad[i] == "Shahzad")
        shahzad[i] = "Gameboy";
}

//2
daniel[1] += 1;

//3
ryan[2] = "Gothem city";

//4
reuben.splice(2, 1)
reuben[2] = "Chicago";

//5
jim.splice(2, 1, "Sydney", "Tokyo", "Honolulu");

//6
jim.splice(2, 2);

// yell at the ninja turtles

//1
const ninjaTurtles = ["donatello", "leonardo", "raphael", "michaelangelo"];

//2

//3

// Returne of the closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],
    [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],
    [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

//1
thomsCloset[2].push("kristyns right shoe");

//dress 'em up

//1

//dirty laundry

//for (i = 0; i <= kristynsCloset.length; i++) {
//  console.log(kristynsCloset[i] + " washing");
//}

//2

//for (i = 0; i <= thomsCloset.length; i++) {
//  if (i == 1) {
//      console.log(thomsCloset[0] + " shirts");
//  } else if (i == 2) {
//      console.log(thomsCloset[1] + " pants");
//  } else if (i == 3) {
//      console.log(thomsCloset[2] + " accessories");
//  }
//}


// multiples of 3 and 5