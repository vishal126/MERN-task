
let ans;

function answer() {
    let number = document.getElementById('input').value;
    if(number > 0)
        ans = 'number is positive ';
    else if(number < 0)
        ans = 'number is negative';
    else
        ans = 'number is zero';

        document.getElementById('display').textContent = ans;
}

let eligible;

function age() {
    let number = document.getElementById('inputAge').value;
    if(number > 18)
        ans = 'you are eligible for vote';
    else if(number < 18)
        ans = 'you are not eligible for vote';
    else
        ans = 'invalid input';

        document.getElementById('displayAge').textContent = ans;
}