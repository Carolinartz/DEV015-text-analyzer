

<p align="center"><font size="5"><strong>Analizador de texto</strong></font></p>



 El siguiente programa es un anlizador de texto, con un diseño muy llamativo e interactivo, cuenta con las siguientes **funciones y códigos**:
 
[TOC]
#FUNCIONES 
## Recuento de palabras 
Cuando ingresas un texto aqui se verá reflejado de manera automática el conteo de palabras que ingresan en el caja de texto, esta acción sera en tiempo real.
## Recuento de caracteres.
Todo texto cuenta con diferente tipo de carcateres como las letras, los números, los espacios, caracteres especiales, hasta signos de puntuación.
Estos se veran refeljados en de manera automatica mientras ingresas tu texto y será en tiempo real.
## Recuento de caracteres sin especios ni signos de puntuación.
Y si quieres saber el número de caracteres que ingresas sin sin espacios y signos de puntuación este es el espacio adecuado, los mirarás mientras ingresas tu texto.
## Recuento de números .
Si tu texto contiene caracteres de tipo numerico y quieres saber unicamente cuantos de este tipo exiten, este contador es el indicado .
## Suma total de números.
Aquí encontrarás la suma total de todos los los números que te encuntres ingresando, los vas singresando y aqui te va a rrojando el valor de la suma en tiempo real.
## Longuitud media de las palabras.
El dato que encontrarás aqui es el promedio de la longuitud de todas las spalabras ingresadas en tu texto.

#Códigos
## html.
```html
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analizador de texto</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <h1>Analizador de texto</h1>
  </header>

  <textarea name="user-input" placeholder="Escribe tu texto aquí..."></textarea>

  <ul>
    <li class="metric" >Recuento de palabras: 0</li>
    <li class="metric" >Recuento de caracteres: 0</li>
    <li class="metric" >Recuento de caracteres (sin espacios ni signos de puntuación): 0</li>
    <li class="metric" >Recuento de números: 0</li>
    <li class="metric" >Suma total de números: 0</li>
    <li class="metric" >Longitud media de las palabras: 0.00</li>

  </ul>
<button id="reset-button">Limpiar</button>

  <footer>
    <p>Autor: Carolina Ortiz</p>
  </footer>

  <script type="module" src="index.js"></script>
</body>

</html>
```

## Java script.
```javascript
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
```
## CSS.
```CSS
header {
    background-color:#faecc7 ;
    color: #f861f1;
    text-align: center;
    padding: 5% 30px;font-size: 24px;
    font-family: Arial, sans-serif;
    font-size: 24px;
}



textarea[name="user-input"] {
    width: 80%;
    height: 100px;
    padding: 10px;
    margin: 20px 0;
    border-radius: 15px;
    border: 1px solid #ccc;
    resize: none;
}


#reset-button {
    display: inline-block;
    padding: 10px 20px;
    margin-bottom: 20px;
    background-color: #ba78e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#reset-button:hover {
    background-color: #ce6ac9;
}


.metric {
    background-color: #fff;
    margin: 2px 0;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ff01d5;
    display: inline-block;

}
ul {
    list-style: none;
    padding: 30px;
    width: auto;
}

body {
    font-family: calibri , sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #faecc7;
}



span {
    font-weight: bold;
}
footer {
    text-align: right;
    width: 80%;
}
textarea {
    padding-top: 50px;
    font-size: 15px;
    width: 80%;
    height: 300px;
    display: block;
    margin: auto;
    line-height: 100px; 
    text-align: center;
}

```

##DOM 
```javascript
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
}); ```

## Comandos Git Hub
```html 
git init
git clone
git add . 
git commit -m "mensaje"  
git commit -am "mensaje" 
git status  
git push 
git pull 
git remote  
git log --online 
git merge ```



`<link>` : <https://github.com/Laboratoria/DEV015-text-analyzer>
<p align="left"><font size="2"><strong>         Carolina Ortiz</strong></font></p>
