function operation() {
    let ans = document.getElementById('answer');
    let num1 = Number(document.getElementById('number1').value);
    let num2 = Number(document.getElementById('number2').value);
    let symbol = document.getElementById('symbol').value;
    console.log(num1, num2, symbol);    

    switch(symbol) {
        case '+': 
            ans.innerText = num1+num2;
            break;

        case '-': 
            ans.textContent = num1-num2;
            break;

        case '*': 
            ans.textContent = num1*num2;
            break;

        case '/': 
            ans.textContent = num1/num2;
            break;
        
        default:
            ans.textContent = 'enter correct operation';
            break;

    }
}