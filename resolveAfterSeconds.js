function resolveAfterSeconds(){

    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('resolved!!!');
        },3000);

    });
}

resolveAfterSeconds().then((data)=>{
    console.log(data);

});

async function getAsyncData(){
const result = await resolveAfterSeconds();
console.log(results);

}

getAsyncData();