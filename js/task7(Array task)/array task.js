// I have to create an array and take numbers in it. I have to take out those values from it whose remainder is 0.

let arr = [15, 20, 1, 2, 3, 4, 5, 7, 15, 25, 30];

const ans = arr.filter((value)=>{
   return value%2==0;

})

console.log(ans);