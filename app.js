// Chapter 35 - 38

// Question No. 1

// function nowDate(){
//     var date = new Date()
//     document.write("<h1>" + date + "</h1>")

// }

// nowDate()

// Question No. 2


// function greetUser(){
//     var firstName = "Wahaj"
//     var lastName = "khan"
//     var fullName = firstName + " " + lastName
//     // console.log(fullName)
//     document.write("<h1>" + fullName + "</h1>")
// }

// greetUser()


// Question No. 3

// function sum(num1 , num2){
    
//     document.write("<h1>" + (num1 + num2) + "</h1>")
// }

// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")


// sum(num1 , num2)


// Question No. 4


// function calculator(num1 , num2 , opt){
//     if(opt === "+"){
//         console.log(num1 + num2)
//     }else if(opt === "-"){
//         console.log(num1 - num2)
//     }else if(opt === "*"){
//         console.log(num1 * num2)
//     }else if(opt === "/"){
//         console.log(num1 / num2)
//     }
// }

// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// var opt= prompt(opt)

// calculator(num1 , num2 , opt)


// Question No. 5


// function sum(num){
//     return num * num
// }

// console.log(sum(5))
// console.log(sum(10))

// Question No. 6

// function factorial(num) {
//    if(num < 0){
//     return undefined
//    }
//    else if(num === 0 || num === 1){
//     return 1;
//    }
//    else{
//     return num*factorial(num - 1)
//    }
//   }

// console.log(factorial(5))
// console.log(factorial(10))


// Question No. 7


// function count(start, end) {

//     const displayDiv = document.getElementById("counting-display");
  
//     for (let i = start; i <= end; i++) {
//       displayDiv.innerHTML += i + "<br>";
//     }
    
//   }


// Question No. 8 


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
  
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     return hypotenuse;
//   }
// var base = 3;
// var perpendicular = 4;
// var hypotenuse = calculateHypotenuse(base, perpendicular);

// console.log(hypotenuse); // Output: 5


// Question No. 9


// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
  
//   function calculateRectangleArea2() {
//     var width = 5;
//     var height = 6;
//     var area = width * height;
//     return area;
//   }

//   var area1 = calculateRectangleArea(5, 6);
// console.log(area1); 

// var area2 = calculateRectangleArea2();
// console.log(area2); 


// Question No. 10

// function checkPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
//   }

//   const str1 = "racecar";
// const str2 = "hello";

// console.log(checkPalindrome(str1)); 
// console.log(checkPalindrome(str2)); 


// Question No. 11


// function capitalizeWords(str) {
//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       const firstLetter = words[i][0];
//       const capitalizedFirstLetter = firstLetter.toUpperCase();
//       const restOfWord = words[i].slice(1);
//       const capitalizedWord = capitalizedFirstLetter + restOfWord;
//       words[i] = capitalizedWord;
//     }
//     return words.join(' ');
//   }
  

//   const str = "the quick brown fox";
// console.log(capitalizeWords(str)); 


// Question No. 12


// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
  
//     return longestWord;
//   }
  
//   var str = "Web Development Tutorial";
//   console.log(findLongestWord(str)); 
  

// Question No. 13


// function countOccurrences(str, letter) {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
//   const str = "JSResourceS.com";
// const letter = "o";
// console.log(countOccurrences(str, letter)); 

  

  
  


  
  