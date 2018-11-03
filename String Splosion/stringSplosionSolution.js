
function stringSplosion(str) {
    //Provice your solution
    let newString = '';
    let oldString = '';
    for (let i = 0; i < str.length; i++){
    	oldString += str.charAt(i);
      newString += oldString;
    }
    return newString;
}
module.exports = stringSplosion;