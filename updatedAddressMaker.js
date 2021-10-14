function addressMaker(address){

const {city, state} = address;

    const newAddress = {
    city,
    state,
    country: 'Bangladesh',

    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);

}


addressMaker({city: 'Dhaka', state: 'Dhaka-South'});