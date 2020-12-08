const CreditCard = require('../../CreditCard/CreditCard.js');
const singletonCrystal = require('../CrystalExpender.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    crystal = singletonCrystal.getCrystal(10, 50);
});

test('Pay 1 Crysfix()tal', () => {
    crystal.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(2950);
});

test('Pay only 9 Crystal', () => {
    for (let i = 0; i < 20; i++) {
        crystal.dispatch(danyCredit);
    }
    expect(danyCredit.credit).toBe(2550);
});

test('Cant pay a crystal', () => {
    danyCredit.pay(3000);
    expect(danyCredit.credit).toBe(0);
    crystal.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(0);
});