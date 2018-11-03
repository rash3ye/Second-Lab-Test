//withoutString function, removes all instances of one string from another
//The string to be removed is called "remove" and the string from which the string remove is removed is called the base
//This program will find and remove all instances of "remove" from "base"
//You can assume that the length of remove is one (1) or more.
// A given base for example `emmanuel` and remove for example `m` will return 'eanuel'

/*function withoutString(base, remove) {
  //Type your solutions here
  let len = remove.length;
  let toDelete = [];
  let str = base;

  for (let i = 0; i < str.length; i++){
    if(str.charAt(i) == remove.charAt(0)){
      if(str.slice(i, (len + i)).toLowerCase() == remove.toLowerCase()){
        str = str.substr(0, i) + str.substr(len + i, base.length);
        i = -1;
      }
    }
  }
  return str;
}
*/

function withoutString(base, remove) {
   return base.split(remove).join("");
}


module.exports = withoutString;