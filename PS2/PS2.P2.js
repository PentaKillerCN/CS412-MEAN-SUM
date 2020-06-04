function* cutter (sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        yield words[i];
    }
}

console.log('PS2 Part 2:');
let demoSentence = 'All I know is something like a bird within her sang'
let myCutter = cutter(demoSentence);
let cursor = myCutter.next();
while (!cursor.done) {
    console.log(cursor.value);
    cursor = myCutter.next();
}
