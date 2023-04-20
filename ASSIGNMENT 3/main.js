function transformStr(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) newStr += str[i].toUpperCase();
    if (i != 0) newStr += "-";
    newStr += str[i].repeat(i);

    // tam yaza bilmedim :(
     }

  return newStr;
}

console.log(transformStr("abc"));
