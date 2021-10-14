function add(numArray){

let total =0;
let product=1;

numArray.forEach(element => {
    total+=element;
    product*=element;
});

console.log('Summation: '+total+', Production: '+product);

}

add([3,2,4,2,6,3]);