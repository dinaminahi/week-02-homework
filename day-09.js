//https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr/train/javascript

function cutIt(arr){ 
   let smallestLength = arr[0].length;
   for (let i = 0; i < arr.length; i++){
      if (arr[i].length < smallestLength) {
         smallestLength = arr[i].length;
      }
   }
   for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0,smallestLength);
   }
   return arr;
}


//https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/train/javascript

function firstToLast(str,c){
   return str.includes(c) ? Math.abs(str.indexOf(c) - str.lastIndexOf(c)) :  -1;
}


//https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript

function splitAndMerge(str,sp){
  str = str.split(' ');   
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('').join(sp);
  }
  return str.join(' '); 
}
