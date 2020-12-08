const CreditCard = require('../../CreditCard/CreditCard.js');
const singletonCrystal = require('../../CrystalExpender/CrystalExpender.js');
const singletonUfosPark = require('../../UfosPark/UfosPark.js');
const singletonReceptive = require("../Receptive.js");
const singletonMenu = require('../../RickMenu/RickMenu.js');

beforeEach(() => {
    receptive = singletonReceptive.getReceptive();
    ufosPark = singletonUfosPark.getUfo();
    crystalExpender = singletonCrystal.getCrystal(100, 100);
    danyCard = new CreditCard("Dany", "123");
    rickMenu = singletonMenu.getMenu();

    let ufos = ["Ufo1", "Ufo2", "Ufo3"];
    for (let i in ufos) {
        ufosPark.addUfo(ufos[i]);
    }
});

test("Comprobar singleton de ufosPark", () => {
    let ufosParkCopia = singletonUfosPark.getUfo();
    expect(ufosPark === ufosParkCopia).toBe(true);
});

test("Check singleton receptive", () => {
    let receptiveCopy = singletonReceptive.getReceptive();
    expect(receptive === receptiveCopy).toBe(true);
});

test("Check 1 receptive", () => {
    receptive.register(ufosPark);
    receptive.dispatch(danyCard);

    expect(danyCard.credit).toBe(2500);

    expect(ufosPark.isOwnerAlreadyServed(danyCard)).toBe(true);
});

test("Check 2 receptive", () => {
    receptive.register(crystalExpender);
    receptive.dispatch(danyCard);

    expect(danyCard.credit).toBe(2400);

    expect(ufosPark.isOwnerAlreadyServed(danyCard)).toBe(true);
    expect(crystalExpender.stock).toBe(99);
});

test("Check 3 receptive", () => {
    receptive.register(rickMenu);
    receptive.dispatch(danyCard);

    expect(danyCard.credit).toBe(2390);

    expect(ufosPark.isOwnerAlreadyServed(danyCard)).toBe(true);
    expect(crystalExpender.stock).toBe(98);
    expect(rickMenu.stock).toBe(99);
});