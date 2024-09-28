let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let ans = document.getElementById('count');
let reset = document.getElementById('reset');

let counter = 0;
ans.innerText = counter;

minus.addEventListener('click',()=>{
    counter--;
    ans.innerText = counter;
})

plus.addEventListener('click',()=>{
    counter++;
    ans.innerText = counter;
})

reset.addEventListener('click',()=>{
    counter=0;
    ans.innerText = counter;
})

plus.addEventListener('mousemove', ()=>{
    counter++;
    ans.innerText=counter;
})