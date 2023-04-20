function transformStr(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i != 0) newStr += "-";

    newStr += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
  }

  return newStr;
}

console.log(transformStr("ab")); // A-Bb
console.log(transformStr("abc")); // A-Bb-Ccc
console.log(transformStr("dkjb")); // D-Kk-Jjj-Bbbb
