const apiurl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers(){

fetch(apiurl)
.then((r)=>r.json())
.then((json)=>{
    console.log(json[0]);
}).catch((error)=>{
    console.log('failed');
});

}

getTop100Campers();