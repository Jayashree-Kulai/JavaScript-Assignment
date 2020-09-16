'use strict';



for(let i=1;i<=7;i++){	
    let hash="";

    for(let j=1;j<=i;j++){
      hash+="#";
    }
      console.log(hash);

 }




for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
        console.log("FizzBuzz");

    if(i%3==0)
        console.log("Fizz");
    else if(i%5==0)
        console.log("Buzz");
    else 
        console.log(i);
}

for(let i=1; i<=8; i++){
  let pat = "";
  if(i%2 == 1){
    pat+=" ";
  }
  for(let j=1; j<=4; j++){
    pat += "# ";
  }
  console.log(pat);
}

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));



//__________________________15-09-2020_______________________________
//___________________________Exercises_______________________________



//______________________Minimum_____________________

// function min(num1, num2) {
//   return num1 < num2 ? num1 : num2;
// }

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10






//Recursion

// function isEven(n) {
//   if (n === 0) {
//     return true;
//   }
//   else if (n === 1) {
//     return false;
//   }
//   else {
//     return isEven(n-2);
//   }
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??



// _______________________BEAN COUNTING____________________________-

// function countBs(s) {
//   let count = 0;
//   for ( let i = 0; i < s.length; i++) {
//     if (s[i] == "B") {
//       count++;
//     }
//   }
//   return count;
// }

// function countChar(s, char) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == char) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4




//_______________________________________________JavaScript Exercise
//__________________________________________Right Justify_________________________________________

// let rightJustify = function(s) {
//    s = String(s);

//   while (s.length < 70) {
//     s = " " + s;
//   }

//   return s;
// };

// console.log( rightJustify('monty') );



//_________________-Fermat’s Last Theorem__________________________________

// function checkFermat(a, b, c, n) {
//   function power(base, exp) {
//     if (exp == 0) {
//       return 1;
//     }
//     else{
//       return base * power(base, exp - 1);
//     }
//   }

//   if ( power(a, n) + power(b, n) == power(c, n) ) {
//     console.log("Holy smokes, Fermat was wrong!");
//   }
//   else {
//     console.log("No, that doesn’t work.");
//   }

// }

// checkFermat(2,3,5,2);



//___________________________99 bottles of water on the wall______________________

// let waterBottelSong = function(n) {
//   while (n>0) {
//     firstLine(n);
//     secondLine(n);
//     thirdAndFourthLine(n);
//     n--;
//   }

//   if (n == 0) {
//     console.log("No bottles of water on the wall,");
//     console.log("no bottles of water,");
//     console.log("ya’ can’t take one down, ya’ can’t pass it around,"); 
//     console.log("’cause there are no more bottles of water on the wall!");
//   }

//   function firstLine(n) {
//     console.log(n+" bottles of water on the wall,");
//   }

//   function secondLine(n) {
//     console.log(n+" bottles of water,");
//   }

//   function thirdAndFourthLine(n) {
//     console.log("ya’ take one down, ya’ pass it around,");
//     console.log((n-1)+" bottles of water on the wall.\n")
//   }

// };

//waterBottelSong(99);


//_______________________________________________________recursive function named oddSum_____________________________


function oddSum(n) {
    if (n % 2 == 0) {
        return "It's not an odd number.";
    }

    console.log(n);

    if (n == 1) {
        return 1;
    }
    else {
        return n + oddSum(n - 2);
    }

}
console.log(oddSum(13));



//_______________________________________________________recursive function called power_____________________
function power(base, expo) {
  if (expo === 0) {
    return 1;
  }
  else {
    return base * power(base, expo - 1);
  }
}
console.log(power(2, 3));