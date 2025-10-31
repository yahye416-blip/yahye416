// Function returning a Promise that might reject
async function getPhonePromise() {
    let isMomHappy = true;

    if (isMomHappy) {
        return {
            brand: 'Samsung',
            color: 'black'
        };
    } else {
        // Throwing an error will reject the Promise
        throw new Error('Mom is not happy');
    }
}

// Using await with rejection handling
async function consumePhonePromise() {
    try {
        let phone = await getPhonePromise();  // waits for promise to resolve
        console.log('Got a new phone:', phone);
    } catch (error) {
        console.log('Promise rejected:', error.message);
    }
}

consumePhonePromise();
//output if false= Promise rejected: Mom is not happy
//output if true= Got a new phone: { brand: 'Samsung', color: 'black' }