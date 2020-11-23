const CreditCard = require('../src/CreditCard.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
});

test('Create CreditCard', () => {
    expect(danyCredit.owner).toBe("Dany");
    expect(danyCredit.number).toBe(123);
    expect(danyCredit.credit).toBe(3000);
});

test('Create 2 CreditCards', () => {
    let zuritaCredit = new CreditCard("Zurita", 1234);
    expect(danyCredit.owner).toBe("Dany");
    expect(danyCredit.number).toBe(123);
    expect(danyCredit.credit).toBe(3000);
    expect(zuritaCredit.owner).toBe("Zurita");
    expect(zuritaCredit.number).toBe(1234);
    expect(zuritaCredit.credit).toBe(3000);
});

test('Pay 500 credits', () => {
    danyCredit.pay(500);
    expect(danyCredit.credit).toBe(2500);
});

test('Cant pay 5000 credits', () => {
    danyCredit.pay(5000);
    expect(danyCredit.credit).toBe(3000);
});

test('Cant pay with 0 credits', () => {
    danyCredit.pay(3000);
    danyCredit.pay(1);
    expect(danyCredit.credit).toBe(0);
});