const itemsService = require('../src/db/itemsService');
const itemsData = require('../src/db/itemsData');
const sinon = require('sinon');
const mock = require('sinon/lib/sinon/mock');

test('Must obtain the items', async function () {
    const items = await itemsService.getItems();
    expect(items).toHaveLength(3);
});

test('Must obtain the items with stub', async function () {
    sinon.stub(itemsData, "getItems").returns([{id_item: 4}]);
    const items = await itemsService.getItems();
    expect(items).toHaveLength(1);
    sinon.restore();
});

test('Must obtain the items with spy', async function () {
    const spy = sinon.spy(itemsData, "getItems");
    const items = await itemsService.getItems();
    expect(items).toHaveLength(3);
    sinon.assert.calledOnce(spy);
    sinon.restore();
});

test('Must obtain the items with mock', async function () {
    const mock = sinon.mock(itemsService);
    mock.expects('getItems').once().returns([{id_item: 4}]);
    const items = await itemsService.getItems();
    expect(items).toHaveLength(1);
    mock.verify();
    sinon.restore();
});
