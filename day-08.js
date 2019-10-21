//https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

function whatNumberIsIt(n){
     if(n === Number.MAX_VALUE){
        return "Input number is Number.MAX_VALUE";
     } else if(n === Number.MIN_VALUE){
        return"Input number is Number.MIN_VALUE";
     } else if(isNaN(n)){
       return "Input number is Number.NaN";
     } else if(n === Number.NEGATIVE_INFINITY){
       return "Input number is Number.NEGATIVE_INFINITY";
     } else if(n === Number.POSITIVE_INFINITY){
        return "Input number is Number.POSITIVE_INFINITY";
     } else {
        return "Input number is " + n;
     }
}


//https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring/train/javascript

function colorOf(r,g,b){
   r = r.toString(16);
   g = g.toString(16);
   b = b.toString(16);
   if (r.length === 1) {
      r = '0' + r;
   }
   if (g.length === 1) {
      g = '0' + g;
   }
   if (b.length === 1) {
      b = '0' + b;
   }
   return  '#' + r + g + b;
}

//https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision/train/javascript

function howManySmaller(arr,n){
  let result = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i].toFixed(2) < n)
      result++;
  }
  return result;  
}
