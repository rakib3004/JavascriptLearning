class Animal{

constructor(type,legs){
    this.type = type;
    this.legs = legs;

}

makeNoice(sound='Loud Noice'){
    console.log(sound);

}

static return10(){
    return 10;
}

get metaData(){
    return `type: ${this.type}, legs: ${this.legs}`
}
}