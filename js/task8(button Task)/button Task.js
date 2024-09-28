// You have to take a button and as soon as you click on that button it will disappear

let btn = document.getElementById('btn');

// btn.addEventListener('click', ()=>{
//     document.body.style.display = 'none';
// })

function remove() {
    btn.remove();
}