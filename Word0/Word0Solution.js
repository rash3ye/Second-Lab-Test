//Given an array of strings, return a Map<String, Integer> containing a key for every different string in the array,
//always with the value 0. For example the string "hello" makes the pair "hello":0. We'll do more complicated
//counting later, but for this problem the value is simply 0.

function word0(str){
  let newMap = {};
  for (let i = 0; i < str.length; i++){
    newMap[str[i]] = 0; 
  }
  return newMap;
}


module.exports = word0;