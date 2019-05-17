// #String Exercises

// These exercises are aimed at making you more familiar with strings, namely string methods as well as string interpolation. 

// Print your results of each exercise to the console. Use the terminal to view your results. 

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let str = "I can walk in the park all day!";
console.log("1: " + str.indexOf("park"));
console.log("1: " + str.substr(18, 4));

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let hobby = "JavaScript";
console.log("2: " + hobby.substr(3, 3));

// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let greeting = "hello World";
console.log("3: " + greeting.toUpperCase()); // LOCAL

// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let hello = "Hello Earthling";
hello = hello.toLowerCase(); // GLOBAL
console.log("4: " + hello);


// 5. Check if the sentence "nice shoes" contains the letter l or n. 
let shoes = "nice shoes";
console.log("5: " + (shoes.includes("l") || shoes.includes("n")));


// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
console.log("6: " + hobby[0] + hobby + hobby[0]);
//console.log(hobby.split("")); <-- SHOWS STRING AS ARRAY

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let ipt = hobby.substr(7, 3)
console.log("7: " + ipt + hobby + ipt);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
let str2 = "Having Fun";
console.log("8: " + str2.toUpperCase().includes("Java"));

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
console.log("9: " + hobby[hobby.length - 1] + hobby.substr(1, 8) + hobby[0]);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 
let name = "Nike";
let city = "Berlin";
let job = "Student";
// console.log("10: " + "My name is " + name + ". I live in " + city + " and I am a " + job);
console.log("10: " + `My name is ${name}. I live in ${city} and I am a ${job}`);

// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let fox = "the quick brown fox";
console.log("11: " + fox[0].toUpperCase() + fox.substr(1));
