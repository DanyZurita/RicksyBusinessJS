const singletonUfosPark = require('../UfosPark.js');
const CreditCard = require('../../CreditCard/CreditCard.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    zuritaCredit = new CreditCard("Zurita", 1234);
    ufosPark = singletonUfosPark.getUfo();

});

test('Singleton UfosPark', () => {
    let ufosParkCopy = singletonUfosPark.getUfo();
    expect(ufosPark === ufosParkCopy).toBe(true);
});

describe('Adding ufos to the fee', () => {

    beforeEach(() => {
        ufos = ["Ufo1", "Ufo2", "Ufo3"];
        for (let i in ufos) {
            ufosPark.addUfo(ufos[i]);
        }
    });

    test('Add 3 new Ufo', () => {
        let actualFleet = new Map();
        for (let i in ufos) {
            actualFleet.set(ufos[i], null)
        }
        expect(ufosPark.fleet).toMatchObject(actualFleet);
    });

    test('Dispatch 2 Ufos', () => {
        let actualFleet = new Map().set("Ufo1", danyCredit.number).set("Ufo2", zuritaCredit.number).set("Ufo3", null);
        ufosPark.dispatch(danyCredit);
        ufosPark.dispatch(zuritaCredit)
        expect(ufosPark.fleet).toMatchObject(actualFleet);
    });

});