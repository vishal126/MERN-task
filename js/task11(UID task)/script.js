// Generate a unique id which has characters A to Z uppercase and a to z lowercase and I want to enter numbers from 1 to 10
const length = 10;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let result='';
if(length<11 && length>0)
{
    for(let i=0; i<length; i++)
    {
        result += alphabet[Math.floor(Math.random()*alphabet.length)];
    }
}
else
{
    result='enter correct length';
}


console.log(result);