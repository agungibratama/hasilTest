function hapusDuplikat(word) {
  let charLastIndex = new Map();

  // Store the last index of each character
  for (let i = 0; i < word.length; i++) {
    charLastIndex.set(word[i], i);
  }

  // Create an array of characters at their last index, sorted by index
  let result = [];
  for (let [char, index] of charLastIndex) {
    result.push({ char, index });
  }
  result.sort((a, b) => a.index - b.index);

  // Extract only the characters
  return result.map((item) => item.char).join('');
}

console.log(hapusDuplikat('imajination'));
