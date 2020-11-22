const singletonUfosPark = require('../src/UfosPark.js');

test('Singleton UfosPark', () => {
    let ufosPark = singletonUfosPark.getUfo();
    let ufosPark2 = singletonUfosPark.getUfo();
    expect(ufosPark === ufosPark2).toBeTruthy();
});