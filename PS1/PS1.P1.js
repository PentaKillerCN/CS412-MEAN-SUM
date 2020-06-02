const sortInAlphabet = (inputString) => inputString.split('').sort().join('');

console.log('PS1 Part 1:');
console.log(`${sortInAlphabet("supercalifragilisticexpialidocious")}`);

module.exports = {sortInAlphabet};
