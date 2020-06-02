const func = (inputStr, inputFunc) => {
    if(typeof inputStr !== 'string') {
        return new Error('The first input is not a string');
    }
    if(typeof inputFunc !== 'function') {
        return new Error('The second input is not a function');
    }
    return inputFunc(inputStr);
}

const expr1 = func('supercalifragilisticexpialidocious',
    (inputStr) => inputStr.split(/(?=c)/g)
)

const expr2 = func('supercalifragilisticexpialidocious',
    (inputStr) => {
    let obj = {
        originalString: inputStr,
        modifiedString: inputStr.replace(/a/g, 'A'),
        numberReplaced: inputStr.split('a').length - 1,
        length: inputStr.length
    };
    return obj;
})


console.log('PS1 Part 3:');
console.log(expr1);
console.log(expr2);

module.exports = {func};
