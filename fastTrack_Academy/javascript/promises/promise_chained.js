const showGifts = (bag) => console.log(bag);

async function getPhoneFromMum() {
    var mumsPhone = { make: "Samsung", model: "Note", color: "black" };
    return mumsPhone;
}

async function getPhoneCoverFromDad(phone) {
    // dad gives the phone cover and a bag
    var bag = [];
    var phoneCover = { color: "white" };
    bag.push(phone);
    bag.push(phoneCover);
    return bag;
}

async function getPhoneSimFromSister(bag) {
    // sister gives a SIM
    var sim = { network: "Vodafone", number: "07947755623" };
    bag.push(sim);
    showGifts(bag);
}

async function askFamily() {
    let phone = await getPhoneFromMum();
    let bag = await getPhoneCoverFromDad(phone);
    await getPhoneSimFromSister(bag);
}

askFamily();
