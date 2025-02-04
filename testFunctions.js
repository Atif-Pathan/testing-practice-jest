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


module.exports = { capitalize, reverseString, calculator };