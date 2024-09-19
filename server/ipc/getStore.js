const fs = require('node:fs');
const path = require('node:path');

function getStore () {
    const file = path.resolve('data', 'store.json');

    if (fs.existsSync(file)) {
        try {
            const data = fs.readFileSync(file, 'utf8');
            return JSON.parse(data);
          } catch (err) {
            return err;
          }
    } 

}

module.exports = getStore;