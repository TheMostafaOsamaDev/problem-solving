/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = new RegExp(/[^a-zA-Z0-9]/g);
  const newStr = s.replaceAll(regex, \\);
  let i = 0,
    k = newStr.length - 1;
  const temp = \\;

  while (i < k) {
    if (newStr[i++].toLocaleLowerCase() !== newStr[k--].toLocaleLowerCase())
      return false;
  }
  return true;
};