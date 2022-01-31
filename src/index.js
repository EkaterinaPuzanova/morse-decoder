const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    MORSE_TABLE[' '] = ' ';

    let arrExpr = expr.split('');
    let result1 = [];
    while(arrExpr.length) result1.push(arrExpr.splice(0,2).reduce(function(sum, elem) {return sum + elem}));
    let result2 = [];
    while(result1.length) result2.push(result1.splice(0,5));
   
    for (let i = 0; i < result2.length; i++) {
      result2[i] = result2[i].filter(x => x != '00');  
    }
  
    for (let f = 0; f < result2.length; f++) {
      for (let g = 0; g < result2[f].length; g++) {
        if (result2[f][g] === '10') {result2[f][g] = '.'};
        if (result2[f][g] === '11') {result2[f][g] = '-'};
        if (result2[f][g] === '**') {result2[f] = [' ']};
      }
    }
   
    for (let k = 0; k < result2.length; k++) {
       result2[k]=result2[k].reduce(function(sum, elem) {return sum + elem}, '');
       result2[k] = MORSE_TABLE[result2[k]];
    }
   
    return result2.reduce(function(sum, elem) {return sum + elem}, '');  
   
}

module.exports = {
    decode
}