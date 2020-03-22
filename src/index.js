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
    ' '    :  ' '
};

function decode(expr) {
    let str = expr;
    let arr = [];

    for (let i = 0; i < str.length; i+=10){
        arr.push(str.slice(i, i+10))
    }

    let resultStr = '';

    for (let i = 0; i < arr.length; i++){
        let prepareStr = '';

        if(arr[i][0] === '*'){

            prepareStr+= ' ';
        }
        else{
            for(let k = 0; k < arr[i].length; k+=2){

                switch (arr[i].slice(k, k+2)) {
                    case '00':
                        break;
                    case '10':
                        prepareStr += '.';
                        break;
                    case '11':
                        prepareStr += '-';
                        break;
                }
            }
        }

        resultStr+=MORSE_TABLE[prepareStr];

    }

    return resultStr;
}

module.exports = {
    decode
};