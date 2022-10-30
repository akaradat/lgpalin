const SEPARATOR = '#';

function manacher(originalString) {
  const str = `${SEPARATOR}${originalString
    .split('')
    .join(SEPARATOR)}${SEPARATOR}`;
  const palindromicLengths = new Array(str.length).fill(0);
  let center = 0;
  let right = 0;

  for (let i = 0; i < str.length; i++) {
    const mirror = 2 * center - i;

    if (i < right) {
      palindromicLengths[i] = Math.min(right - i, palindromicLengths[mirror]);
    }

    let start = i - (1 + palindromicLengths[i]);
    let end = i + (1 + palindromicLengths[i]);

    while (start >= 0 && end < str.length && str[start] === str[end]) {
      palindromicLengths[i]++;
      start--;
      end++;
    }

    if (i + palindromicLengths[i] > right) {
      center = i;
      right = i + palindromicLengths[i];
    }
  }

  const longestPalindromicLength = Math.max(...palindromicLengths);
  const longestPalindromicIndex = palindromicLengths.indexOf(
    longestPalindromicLength
  );
  const longestPalindromicSubstring = str.slice(
    longestPalindromicIndex - longestPalindromicLength,
    longestPalindromicIndex + longestPalindromicLength + 1
  );

  return longestPalindromicSubstring.split(SEPARATOR).join('');
}

module.exports = {
  manacher,
};
