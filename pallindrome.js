const str = "racecar";

function checkPalindrome(str) {
  let j = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

const a = checkPalindrome(str);
console.log(a);
