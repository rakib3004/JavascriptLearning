function add(...nums){

let total = nums.reduce(function(x,y){
    console.log(x+y);
return x+y;
});

console.log('The final summation is : '+ total);
}
add(8,75,984,54,5,7,5,8,62,4,7,5,8,4,456,987,5,165);