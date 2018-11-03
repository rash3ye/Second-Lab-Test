
function wordCount(str) {
  let newMap = {};
  let count ={};

 for (let i = 0; i < str.length; i++){
    if (!(str[i] in newMap)) {
      count[str[i]] = 1;
      newMap[str[i]] = count[str[i]];
    }
    else {
        newMap[str[i]] = ++count[str[i]];
    }
}
return newMap;
}

module.exports = wordCount;