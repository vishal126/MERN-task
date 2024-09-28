for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write("* ");
    }
    console.log('');
}
console.log('')
for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        process.stdout.write("* ");
    }
    console.log('');
}
