function sumNumbers(str) {
    //Provide your solution here
    let sum = 0;
    let arrNumber = [];
    let numText = '';
    
    for(let x = 0; x < str.length; x++){
      if(isDigit(str.charAt(x))){
        numText += str.charAt(x);
        if(!isDigit(str.charAt(x+1))){
          arrNumber.push(parseInt(numText));
        }
        else continue;
        numText = '';
        continue;
      }
      if(!isDigit(str.charAt(x))){
        continue;
      }
    }

    const add = (a,b) => a + b;
    sum = arrNumber.reduce(add);

    return sum;
}

function isDigit(c){
    return c >= '0' && c <= '9';
}

module.exports = sumNumbers;