//https://www.codewars.com/kata/training-js-number-20-methods-of-string-object-charat-charcodeat-and-fromcharcode/train/javascript

function topSecret(str){
   let result = '';
   for (let i = 0; i < str.length; i++) {
      let letterCode = str[i].toUpperCase().charCodeAt();
      if (letterCode >= 65 && letterCode <= 67) {
         result += String.fromCharCode(str.charCodeAt(i) + 23);
      } else if (letterCode > 67 && letterCode <= 90) {
         result += String.fromCharCode(str.charCodeAt(i) - 3);
      } else {
         result += str[i];
      }
   }  
   return result;
}
//question1: The top secret file number is...
answer1 = '2135';
//question2: Super agent's name is...
answer2 = 'ZIUScE';
//question3: He stole the treasure is...
answer3 = 'Lolli pop';



//https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/train/javascript
function fiveLine(s){
   let result = s.trim();
   return `${result}\n${result.repeat(2)}\n${result.repeat(3)}\n${result.repeat(4)}\n${result.repeat(5)}`;
}


//https://www.codewars.com/kata/training-js-number-19-methods-of-string-object-touppercase-tolowercase-and-replace/train/javascript

//Так не працює
function alienLanguage(str){
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length;
        for (let j = 0; j < wordLength - 1; j++) {
            words[i] = words[i].replace(words[i][j], words[i][j].toUpperCase());
        }
        words[i] = words[i].replace(words[i][wordLength - 1], words[i][wordLength - 1].toLowerCase()); //Ось цей рядочок чомусь інколи заміняє не останню літеру, а якусь іншую
    }
    return words.join(' ');
}


//А так працює
function alienLanguage(str){
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length;
        for (let j = 0; j < wordLength - 1; j++) {
            words[i] = words[i].replace(words[i][j], words[i][j].toUpperCase());
        }
        words[i] = words[i].replace(/.$/, words[i][wordLength - 1].toLowerCase()); //Поставила тут регулярний вираз, що вказує на кінець рядка
    }
    return words.join(' ');
}

