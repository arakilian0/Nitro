const fs = require('node:fs');
const path = require('node:path');
var store = require('./getStore.js')();

function setStore (event, K, V) {
    const file = path.join(path.resolve(), 'src', 'store.json');

    if (store) {
        for (let key in store) {
            if (key === K) store[K] = V;
        }
        fs.writeFileSync(file, JSON.stringify(store, null, 2));
        return true;
    }
    return false;
}

module.exports = setStore;