import analyzer from './analyzer.js';


document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector('textarea[name="user-input"]');
  const metrics = document.querySelectorAll('.metric');
  const resetButton = document.getElementById('reset-button');


  const wordCountSpan = metrics[0];
  const charCountSpan = metrics[1];
  const charCountNoSpacesSpan = metrics[2];
  const numberCountSpan = metrics[3];
  const numberSumSpan = metrics[4];
  const avgWordLengthSpan = metrics[5];

  
  const updateMetrics = () => {
    const text = textArea.value;

    const wordCount = analyzer.getWordCount(text);
    wordCountSpan.textContent = `Recuento de palabras: ${wordCount}`;

    const charCount = analyzer.getCharacterCount(text);
    charCountSpan.textContent = `Recuento de caracteres: ${charCount}`;

    const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
    charCountNoSpacesSpan.textContent = `Recuento de caracteres (sin espacios ni signos de puntuación): ${charCountNoSpaces}`;

    const avgWordLength = analyzer.getAverageWordLength(text);
    avgWordLengthSpan.textContent = `Longitud media de las palabras: ${avgWordLength.toFixed(2)}`;

    const numberCount = analyzer.getNumberCount(text);
    numberCountSpan.textContent = `Recuento de números: ${numberCount}`;

    const numberSum = analyzer.getNumberSum(text);
    numberSumSpan.textContent = `Suma total de números: ${numberSum}`;
  };
    
  textArea.addEventListener('input', updateMetrics);

  resetButton.addEventListener('click', () => {
    textArea.value = '';
    updateMetrics();
  });
  
  updateMetrics();
});