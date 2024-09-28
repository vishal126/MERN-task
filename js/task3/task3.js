function oddEven(event) {
    let number = Number(document.getElementById('number').value);
    let answer = document.getElementById('answer');
    console.log(number);    
    if(number%2 === 0)
        answer.textContent = 'even';
    else
        answer.textContent = 'odd';
}