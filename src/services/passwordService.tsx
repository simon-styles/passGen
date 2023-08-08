function getRandomCharacter(str: string): string {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}

/**
 * Shuffles an array using the Fisher-Yates (also known as the Knuth) algorithm.
 * This provides a true, unbiased shuffle, ensuring that every permutation is equally likely.
 */
function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export function generatePassword(length: number, categories: string[]): string {
  if (length < categories.length) {
    throw new Error(`Length must be at least ${categories.length}`);
  }

  const allCharacters = categories.join("");
  let result = Array.from({ length: length - categories.length }, () =>
    getRandomCharacter(allCharacters),
  );

  for (const category of categories) {
    result.push(getRandomCharacter(category));
  }

  result = shuffle(result);

  return result.join("");
}
