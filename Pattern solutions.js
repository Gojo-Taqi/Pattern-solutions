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