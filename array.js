'use strict';

/* 1
Write a function called nestedSum that takes an array of arrays of integers 
and adds up the elements from all of the nested arrays. For example:

>> let t = [[1, 2], [3], [4, 5, 6]];
>>> nestedSum(t)
21
*/

function nestedSum(t) {
    let sum = 0;
    for (let row of t) {
        for (let col of row) {
                sum += col;
        }
    }
    return sum;
}

let t = [[1, 2], [3], [4, 5, 6]];
console.log(nestedSum(t));


//_______________________________________________________________________________________________________________________________________________________
/* 2
Write a function called cumulativeSum that takes an array of numbers and 
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements 
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/

function cumulativeSum(arr) {
    let newArray = new Array(arr.length);
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        newArray[i] = sum + arr[i];
        sum = newArray[i];
        //console.log(newArray[i]);
    }
    
    return newArray;
}

let t = [1,2,3];
console.log(cumulativeSum(t));

//_____________________________________________________________________________________________________________________________________________________________
/* 3
Write a function called middle that takes an array and returns a new array that contains 
all but the first and last elements. For example:

>>> let t = [1, 2, 3, 4]
>>> middle(t)
[2, 3]
*/

let middle = function (arr) {
    let newArray = arr;
    newArray.shift();
    newArray.pop();
    return newArray;
};

console.log(middle([1, 2, 3, 4]));




//______________________________________________________________________________________________________________________________________________________
/* 4
Write a function called chop that takes an array , modifies it by removing the first and last elements, 
and returns undefined. 

For example:
>>>let t = [1, 2, 3, 4]
>>> chop(t)
>>> t
[2, 3]
*/

let chop = function (arr) {
    if (arr.length != 0) {
        arr.pop();
        arr.shift();
        return arr;
    }

    return undefined;
};

console.log(chop([1, 2, 3, 4]));





//___________________________________________________________________________________________________________________________________________________________
/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is sorted in ascending order 
and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/


function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                return false;
            }
        }
    }

    return true;
}

console.log(isSorted(['b','a']));

//__________________________________________________________________________________________________________________
/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */

let isAnagrams = function(str1, str2) {
    if (str1.length === str2.length) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        for (let char1 of str1) {
            for (let i=0; i<str2.length; i++) {
                if (char1 === str2[i]) {
                    break;
                }

                if(i === str2.length-1) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
};

console.log( isAnagrams('Listen','silent'));


//____________________________________________________________________________________________________________________________________________

 /* 7
 Write a function called hasDuplicates that takes an array and returns true 
 if there is any element that appears more than once. It should not modify the original array.
 */

let hasDuplicates = function(arr) {
    let originalSize = arr.length;
    console.log(originalSize);
    const set = new Set(arr);
    let setSize = Array.from(set).length
    console.log(setSize);
    if(originalSize != setSize) {
        return true;
    }
    return false;
};
console.log(hasDuplicates(["foo","bar","baz","foo"]));

console.log(hasDuplicates([1,2,3,4,5,4]));


 /* 8
 A word is said to be a “doubloon” if every letter that appears in the word appears exactly twice. 
 Here are some example doubloons found in the dictionary:

Abba, Anna, appall, appearer, appeases, arraigning, beriberi, bilabial, boob, Caucasus, coco, 
Dada, deed, Emmett, Hannah, horseshoer, intestines, Isis, mama, Mimi, murmur, noon, Otto, papa, 
peep, reappear, redder, sees, Shanghaiings, Toto
Write a function called isDoubloon that takes a string and checks whether it is a doubloon. 
To ignore case, invoke the toLowerCase method before checking.
 */

 let str = "jayashree";
 
 function isDoubloon(str) {
     for (let i = 0; i < str.length; i++) {
         for (let j=i+1; j< str.length; j++) {
            console.log(str[i]+"  "+str[j]);
             if (str[i] === str[j]) {
                 console.log(str[j]);
                 str = str.replace(str[i],'*');
                 str = str.replace(str[j],'*');
                 console.log(str);
             }
         }
     }

     for (let char of str) {
         if (char != '*') {
             return false;
         }
     }

     return true;

 }

console.log(isDoubloon(str));

 //__________________________________________________________________________________________________________________

/* 9
A word is said to be “abecedarian” if the letters in the word appear in alphabetical order. 
For example, the following are all six-letter English abecedarian words:

abdest, acknow, acorsy, adempt, adipsy, agnosy, befist, behint, beknow, 
bijoux, biopsy, cestuy, chintz, deflux, dehors, dehort, deinos, diluvy, dimpsy
Write a function called isAbecedarian that takes a String and returns a boolean indicating whether the word is abecedarian
*/
function isAbecedarian(str) {
    let index = 0;
    let char = 'a'; 
    while (index < str.length) {
            if (char > str.charAt(index)) {
                    return false;
            }
            char = str.charAt(index); 
            index += 1;

    }
    return true;
}

console.log(isAbecedarian("dehort"));