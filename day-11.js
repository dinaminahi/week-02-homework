//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2){
  for (const item of s1) {
     if (!s2.has(item)){
        return false;
     } 
  }
  for (const item of s2) {
     if (!s1.has(item)){
        return false;
     } 
  }
  return true;
}

function notEqual(s1, s2){
   for (const item of s1) {
     if (!s2.has(item)){
        return true;
     } 
   }
   for (const item of s2) {
     if (!s1.has(item)){
        return true;
     } 
   }
   return false;
}
