const CreditCard = require('../src/CreditCard.js');
const RickMenu = require('../src/RickMenu.js');

beforeEach(() => {
    danyCredit = new CreditCard("Dany", 123);
    menu = new RickMenu();
});

test('Pay 1 Menu', () => {
    menu.dispatch(danyCredit);
    expect(danyCredit.credit).toBe(2990);
});

test('Pay only 100 menus', () => {
    for (let i = 0; i < 101; i++) {
        menu.dispatch(danyCredit);
    }
    expect(danyCredit.credit).toBe(2000);
});