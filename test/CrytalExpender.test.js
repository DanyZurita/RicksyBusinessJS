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
