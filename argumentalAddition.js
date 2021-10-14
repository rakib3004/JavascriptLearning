function add(...nums){

    let total = nums.reduce((x,y)=> x+y);
    
    console.log('Result is : '+ total);
    }
    //add(4,2,5,7,5,6,7,8,1,9,8,1,2,3,8,6,4,1,9,2,3,5,6,8);
    add(3,6,4,8,5);