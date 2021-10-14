function addressMaker(address){

    let newAddress = {
        city : address.city,
        state: address.state,
        country : 'Bangladesh',
    };

    console.log(newAddress);

}


addressMaker({city: 'Jamalpur', state: 'Dhaka'});