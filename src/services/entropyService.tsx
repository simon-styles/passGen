const LOWERCASE_CHARS = 26;
const UPPERCASE_CHARS = 26;
const DIGIT_CHARS = 10;
const SPECIAL_CHARS_SET = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const SPECIAL_CHARS = SPECIAL_CHARS_SET.length;

export function computeEntropy(password: string): number {
  if (!password) {
    return 0;
  }

  let N = 0;

  if (/[a-z]/.test(password)) N += LOWERCASE_CHARS;
  if (/[A-Z]/.test(password)) N += UPPERCASE_CHARS;
  if (/\d/.test(password)) N += DIGIT_CHARS;

  let containsSpecialChar = false;
  for (let char of password) {
    if (SPECIAL_CHARS_SET.includes(char)) {
      containsSpecialChar = true;
      break;
    }
  }

  if (containsSpecialChar) N += SPECIAL_CHARS;

  return Math.log2(Math.pow(N, password.length));
}
