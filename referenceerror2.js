/* const x  = 'posi';
const y = 'moni';
console.log(z); ReferenceError: z is not defined */

/* console.log(name);
const name = 'ananta'; ReferenceError: Cannot access 'name' before initialization */

// console.log(add(1,2))
// function add(n1, n2){
//     return n1+n2;
// }

//but
/* console.log(add2(1,2))
const  add2 = (n1, n2) => {
    return n1+n2;
} ReferenceError: Cannot access 'add2' before initialization */

/* function doSum () {
    const sum = 55;
}
console.log(sum); ReferenceError: sum is not defined */

function doSum2 () {
    console.log(sum+2); 
}
let sum = 55;
