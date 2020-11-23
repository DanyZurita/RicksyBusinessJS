const singletonUfosPark = require('../src/UfosPark.js');
const CreditCard = require('../src/CreditCard.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    ufosPark = singletonUfosPark.getUfo();
});

test('Singleton UfosPark', () => {
    let ufosPark2 = singletonUfosPark.getUfo();
    expect(ufosPark).toMatchObject(ufosPark2);
});

test('Add 3 new Ufo', () => {
    let ufos = ["Ufo1", "Ufo2", "Ufo3"];
    let actualFleet = new Map();
    for (let i in ufos) {
        actualFleet.set(ufos[i], null)
        ufosPark.addUfo(ufos[i]);
    }
    expect(ufosPark.fleet).toMatchObject(actualFleet);
});