const CreditCard = require('../../CreditCard/CreditCard.js');
const singletonMenu = require('../RickMenu.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    menu = singletonMenu.getMenu();
});

test('Pay 1 Menu', () => {
    menu.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(2990);
});

test('Pay only 99 menus', () => {
    for (let i = 0; i < 101; i++) {
        menu.dispatch(danyCredit);
    }
    expect(danyCredit.credit).toBe(2010);
});

test('Cant pay a menu', () => {
    danyCredit.pay(3000);
    expect(danyCredit.credit).toBe(0);
    menu.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(0);
});