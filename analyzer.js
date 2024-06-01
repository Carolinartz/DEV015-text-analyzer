const analyzer = {
  getWordCount: (text) => {
    const words = text.split(/\s+/);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        count++;
      }
    }
    return count;
  },

  getCharacterCount: (text) => {
    const charCount = text.length;
    return charCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const textWithoutSpaces = text.replace(/\s+/g, '');
    let count = 0;
    for (let i = 0; i < textWithoutSpaces.length; i++) {
      if (/\w/.test(textWithoutSpaces[i])) {
        count++;
      }
    }
    return count;
  },

  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    const numberCount = numbers ? numbers.length : 0;
    return numberCount;
  },

  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
      }
    }
    return sum;
  },

  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);
    let totalLength = 0;
    let validWordCount = 0;

    words.forEach(word => {
      if (word.length > 0) {
        totalLength += word.length;
        validWordCount++;
      }
    });

    const avgWordLength = validWordCount ? totalLength / validWordCount : 0;
    return Number(avgWordLength.toFixed(2));
  
  }
};

export default analyzer;
