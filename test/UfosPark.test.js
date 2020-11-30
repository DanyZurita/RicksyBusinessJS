const singletonUfosPark = require('../src/UfosPark.js');
const CreditCard = require('../src/CreditCard.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    zuritaCredit = new CreditCard("Zurita", 1234);
    ufosPark = singletonUfosPark.getUfo();
});

test('Singleton UfosPark', () => {
    let ufosPark2 = singletonUfosPark.getUfo();
    expect(ufosPark === ufosPark2).toBe(true);
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

test('Dispatch 2 Ufos', () => {
    let ufos = ["Ufo1", "Ufo2", "Ufo3"];
    let actualFleet = new Map().set("Ufo1", danyCredit.number).set("Ufo2", zuritaCredit.number).set("Ufo3", null);
    for (let i in ufos) {
        ufosPark.addUfo(ufos[i]);
    }
    ufosPark.dispatch(danyCredit);
    ufosPark.dispatch(zuritaCredit)
    expect(ufosPark.fleet).toMatchObject(actualFleet);
});