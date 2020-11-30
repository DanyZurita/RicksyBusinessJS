const CreditCard = require('../src/CreditCard.js');
const CrystalExpender = require('../src/CrystalExpender.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    crystal = new CrystalExpender(10, 50);
});

test('Pay 1 Crsytal', () => {
    crystal.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(2950);
});

test('Pay only 10 Crsytal', () => {
    for (let i = 0; i < 20; i++) {
        crystal.dispatch(danyCredit);
    }
    expect(danyCredit.credit).toBe(2500);
});

test('Cant pay a crystal', () => {
    danyCredit.pay(3000);
    expect(danyCredit.credit).toBe(0);
    crystal.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(0);
});