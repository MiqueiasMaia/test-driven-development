const itemsService = require('../src/db/itemsService');

test('Must obtain the itens', async function () {
    const items = await itemsService.getItems();
    expect(items).toHaveLength(3);
});
