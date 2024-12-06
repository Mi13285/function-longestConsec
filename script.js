function longestConsec(strarr, k) {
  const len = strarr.length;
  let result = "";
  if (k > len || k < 1 || len === 0) return result;
  for (let i = 0; i <= len - k; i++) {
    let testString = "";
    for (let j = i; j < i + k; j++) {
      testString += strarr[j];
      if (testString.length > result.length) {
        result = testString;
      }
    }
  }
  return result;
}
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
