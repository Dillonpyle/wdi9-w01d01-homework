//part 1 Terms

//1 Concatenation allows you to combine to strings together and it only works on two strings. String interpolation is a really useful programming language feature that allows you to inject variables directly into a string. ... At no fault of their own, many developers have been forced to write JavaScript like this because JavaScript simply lacks string interpolation.

//var word1 = 'This is';
//var word2 = 'awesome';

//console.log(word1.concat(' ', word2));

//console.log(word2.concat(', ', word1));

//2  dont repeat yourself. 
//So that if changes in the system need to be made only a single change can be made without having to make an unambiguous change somewhere in the system.
//if using identical code in 3 or more places assign it a commond method and seperate different sections of code, this will also make refactoring easier.

//3 when you declare a variable it registers a variable in the corresponding scope and when you assign a variable it assigns a specified value to the variable.

//4 const will be used when the const is only going to be used once. let will be used when the variable will need to be updated throughout the program.

//5 a folder that is one level up from the current directory.

//6 use the man command

//7 It autocompletes a file or directorys name path. it saves time, cuts out spelling errors, and if the file doesnt exist in the directory then it wont autocomplete so you know youre in the wrong folder.

//Part 2 Boolean experssions and operators

//1  a < b
//2 c > d
//3 'Name' = 'Name'
//4 a < b < c
//5 a + a < d
//6 e !== 'kevin'
//7 48 == '48'

// Part 3 While loop

// 1 yes it is because while will always be true
// 2 No i think itll call an error because its trying to redifine the runProgram const

// 3 
//creates a variable thats allowed to change
//let letters = "A";
//creates a variable that is equal to 0 but can increase
//let i = 0;

//runs a loop as long as i value is not greater than 20
//while (i < 20) {
// adds an A to each letter variable until loop stops
//    letters += "A";
//increases i by 1 
//    i++;
//}
//logs the value stored in the variable letters
//console.log(letters);

// Part 4 For loops

//1
//you use a for loop when you know you want to go through a certain number of times. a while loop will run until a certain point is met.

//2 
//for (let i = 0; i <= 999; i++) {
//  console.log('number ' + i);
//}

//3 the first part is the starting point declare on iterator variable.
//   the second is the conditional and keeps going if statement is true.
//   the third is there to repeat or advance the iteration.

//4 
//for (let i = 999; i >= 0; i--) {
//   console.log('counting down ' + i);
//}

//5

for (let i = 1; i <= 10; i++) {
    console.log(`The value of i is : ${i} of 10`);
}