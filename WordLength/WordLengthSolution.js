function wordLength(str) {
  let newMap = new Map();

 for (let i = 0; i < str.length; i++){
    if (!(newMap.get(str[i].toLowerCase()))) {
      newMap.set(str[i].toLowerCase(), str[i].length);
    }
    else {
      continue;
    }
}
return newMap;
}

module.exports = wordLength;

