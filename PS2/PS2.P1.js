function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    yield val1;
    yield val2;
    while (true) {
        result = val1 + val2;
        [val1, val2] = [val2, result];
        yield result;
    }
}

function* evenFibs () {
    const myFibs = fibs();
    while (true) {
        let result = myFibs.next().value;

        if (result === 0 || result%2 === 0) {
            yield result;
        }
    }
}

console.log('PS2 Part 1:');
let count = 6;
let myEvenFibs = evenFibs();
while (count --> 0) {
    console.log(myEvenFibs.next().value);
}
