function capitalize(str) {
    if (!str) {
        return '';
    }
    const index = str.search(/\S/);
    if (index !== -1) {
        return str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
    } else {
        return str;
    }
}

function reverseString(str) {
    let revString = ''
    for (let i = str.length-1; i >= 0; i--) {
        revString += str[i];
        
    }
    return revString;
}

const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      const result = a / b;
      if (Number.isInteger(result)) {
        return result;
      } else {
        return Math.round(result * 100000) / 100000;
      }
    },
    multiply(a, b) {
        const result = a * b;
        if (Number.isInteger(result)) {
          return result;
        } else {
          return Math.round(result * 100000) / 100000;
        }
    }
};

function caesarCipher(string, shift) {
    const arr = string.split('');
    let newStr = '';
    arr.forEach((char) => {
      if (char === ' ') {
        newStr += ' ';
      } else if (char >= 'a' && char <= 'z') {
        // Handle lowercase letters
        let shifted = ((char.charCodeAt(0) - 97 + shift) % 26);
        if (shifted < 0) shifted += 26; // Handle negative shifts
        newStr += String.fromCharCode(shifted + 97);
      } else if (char >= 'A' && char <= 'Z') {
        // Handle uppercase letters
        let shifted = ((char.charCodeAt(0) - 65 + shift) % 26);
        if (shifted < 0) shifted += 26; // Handle negative shifts
        newStr += String.fromCharCode(shifted + 65);
      } else {
        // Non-alphabetic characters
        newStr += char;
      }
    });
    return newStr;
}

function analyzeArray(array) {
  return {
    average: Math.round((array.reduce((sum, currentVal) => sum + currentVal, 0)/array.length) * 100000) / 100000,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
 }
}


module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };