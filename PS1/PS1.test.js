const {describe, it} = require('mocha');
const {expect} = require('chai');
const {sortInAlphabet} = require('./PS1.P1');
const {evaluate} = require('./PS1.P2');
const {func} = require('./PS1.P3');

describe('PS1 Part1 Testing', () => {
    it('Return original string when input string is in alphabetical order', function () {
        let inputString = 'abcdefgh';
        expect(inputString).equal(sortInAlphabet(inputString));
    });

    it('Return alphabetical order of string when input string is not in alphabetical order', function () {
        let inputString = 'inputstringisnotinalphabeticalorder';
        let desireString = 'aaabcdeeghiiiiillnnnnoopprrrssttttu';
        expect(desireString).equal(sortInAlphabet(inputString));
    });

    it('The given test in PS1 Part 1', function () {
        let inputString = 'supercalifragilisticexpialidocious';
        let desireString = 'aaacccdeefgiiiiiiillloopprrssstuux';
        expect(desireString).equal(sortInAlphabet(inputString));
    });
})

describe('PS1 Part2 Testing', () => {
    it('Return 10 when input "8+2"', function () {
        let sum = 10;
        expect(sum).equal(evaluate('8+2')('8+2'));
    });

    it('Return 7 when input "9-2"', function () {
        let diff = 7;
        expect(diff).equal(evaluate('9-2')('9-2'));
    });

    it('Return 6 when input "2*3"', function () {
        let res = 6;
        expect(res).equal(evaluate('2*3')('2*3'));
    });

    it('Return 2 when input "4/2"', function () {
        let res = 2;
        expect(res).equal(evaluate('4/2')('4/2'));
    });

    it('Return error "Divisor is zero" when input "3/0"', function () {
        let expectErr = new Error('Divisor is zero');
        try {evaluate('3/0')('3/0');}
        catch(actualErr) {expect(actualErr).equal(expectErr);}
    });

    it('Return error "Invalid operator found" when input an unsupported operator', function () {
        let expectErr = new Error('Invalid operator found');
        try {evaluate('8%3')('8%3');}
        catch(actualErr) {expect(actualErr).equal(expectErr);}
    });

    it('Return error "Input is not a string" when input a number', function () {
        let expectErr = new Error('Input is not a string');
        try {evaluate(123)(123);}
        catch(actualErr) {expect(actualErr).equal(expectErr);}
    });
})

describe('PS1 Part3 Testing', () => {
    it('Return uppercase of string given lowercase string and toUpper function', function () {
        let inputStr = 'this is going to be uppercase';
        let desireString = 'THIS IS GOING TO BE UPPERCASE';
        expect(desireString).equal(func(inputStr, inputStr => inputStr.toUpperCase()));
    });

    it('Return error "The first input is not a string" when the first input is not a string', function () {
        let expectErr = new Error('The first input is not a string');
        try {func(123, inputStr => inputStr.toUpperCase());}
        catch(actualErr) {expect(actualErr).equal(expectErr);}
    });

    it('Return error "The second input is not a function" when the second input is not a function', function () {
        let expectErr = new Error('The second input is not a function');
        try {func('123', 123);}
        catch(actualErr) {expect(actualErr).equal(expectErr);}
    });
})
