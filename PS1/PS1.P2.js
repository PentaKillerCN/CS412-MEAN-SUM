const evaluate = expr => returnFunction(expr)

const returnFunction = expr => {
    if(typeof expr !== 'string') {
        return _ => new Error('Input is not a string');
    }

    let operator = expr.charAt(1);

    switch (operator) {
        default:
            return _ => new Error('Invalid operator found');
        case '+':
            return (x) => parseInt(x.charAt(0)) + parseInt(x.charAt(2));
        case '-':
            return (x) => parseInt(x.charAt(0)) - parseInt(x.charAt(2));
        case '*':
            return (x) => parseInt(x.charAt(0)) * parseInt(x.charAt(2));
        case '/':
            return (x) => _isDivisorZero(parseInt(x.charAt(2))) ? new Error('Divisor is zero') : parseInt(x.charAt(0)) / parseInt(expr.charAt(2));
    }
}

const _isDivisorZero = divisor => {
    return (divisor === 0);
}

const plus = '4+2';
const mult = '5*7';
const sub = '6-1';
const div = '9/2';

let op1 = evaluate(plus);
let op2 = evaluate(mult);
let op3 = evaluate(sub);
let op4 = evaluate(div);

console.log('PS1 Part 2:');
console.log(`${plus} = ${op1(plus)}`);
console.log(`${mult} = ${op2(mult)}`);
console.log(`${sub} = ${op3(sub)}`);
console.log(`${div} = ${op4(div)}`);

module.exports = {evaluate};
