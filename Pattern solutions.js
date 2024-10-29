// Link to the patterns list - https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

// Pattern 1

// * * * 
// * * * 
// * * *

function printStars(n){
  for (let i=0; i<n; i++) {
  string = '';
    for (let j=1; j<=n; j++) {
      string += '* '
    }
  console.log(string);
  }
  return '';
};

// console.log(printStars(3));

///////////////////////////////////////////////////////////////////////

// Pattern 2

// * 
// * * 
// * * * 

function printStarsTwo(n){
  for(let i=1; i<=n; i++) {
    let print = '';
    for(let j=1; j<=i; j++) {
      print += '* ';
    }
    console.log(print);
  }
  return '';
};

// console.log(printStarsTwo(3))

///////////////////////////////////////////////////////////////////////

// Pattern 3

// 1
// 1 2 
// 1 2 3

function printNumbers(n){
  for(let i=1; i<=n; i++) {
    let numberString = '';
    let number = 1;
    for(let j=1; j<=i; j++) {
      numberString += number++;
    }
    console.log(numberString)
  }
  return '';
}

// console.log(printNumbers(3));

///////////////////////////////////////////////////////////////////////

// Pattern 4

// 1
// 22
// 333

function printNumbersTwo(n){
  for(let i=1; i<=n; i++) {
    let numberString = '';
    let number = 1;
    for(let j=1; j<=i; j++) {
      numberString += i;
    }
    console.log(numberString)
  }
  return '';
}

// console.log(printNumbersTwo(3));

///////////////////////////////////////////////////////////////////////

// Pattern 5

// * * *
// * *
// *

function printStarsInReverseTriangle(n) {
  for(let i=0; i<=n; i++) {
    let string = '';
    for(let j=1; j<=n-i; j++){
      string += '* ';
    }
    console.log(string);
  }
  return '';
}

// console.log(printStarsInReverseTriangle(3));

///////////////////////////////////////////////////////////////////////

// Pattern 6

// 1 2 3
// 1 2
// 1

function printStarsInReverseTriangle(n) {
  for(let i=0; i<=n; i++) {
    let num = 1;
    let string = '';
    for(let j=1; j<=n-i; j++){
      string += num++;
    }
    console.log(string);
  }
  return '';
}

// console.log(printStarsInReverseTriangle(3));