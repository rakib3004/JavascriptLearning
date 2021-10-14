const apiurl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

async function  getTop100Campers(){

 const response = await fetch(apiurl);
 const json = await response.json();
 console.log(json[0]);
}

getTop100Campers();