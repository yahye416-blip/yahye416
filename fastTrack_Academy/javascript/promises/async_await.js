// Promise with async and  then()
async function getPhonePromise() {
    var phone = {
        brand: 'Samsung',
        color: 'black'
    };
    return phone;
}

// Consuming Promise using then()
getPhonePromise().then(phone => {
    console.log(phone);
});
// output: { brand: 'Samsung', color: 'black' }





//  Promise with async and await

async function getPhonePromise() {
    var phone = {
        brand: 'Samsung',
        color: 'black'
    };
    return phone;
}

// Consuming Promise using await
async function consumePhonePromise() {
    let phone = await getPhonePromise();
    console.log(phone);
}

consumePhonePromise();
// output: { brand: 'Samsung', color: 'black' }