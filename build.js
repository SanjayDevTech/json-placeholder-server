import fs from 'fs/promises';
import { db } from './db.js';
import dbRules from './db-rules.js';
import { verifyRule } from './utils.js';

const build = async () => {
    if (!verifyRule(dbRules)) {
        throw new Error('Invalid rules');
    }
    if (dbRules.collections.length === 0) {
        throw new Error('No collection mentioned in rules');
    }
    if (dbRules.collections.length !== Object.keys(dbRules.rules).length) {
        throw new Error('collections mentioned in rules is not matched with rules');
    }
    if (dbRules.collections.length !== Object.keys(db).length) {
        console.warn('collections mentioned in rules is not matched with db.js. Will only build collections mentioned in rules.');
    }
    await fs.rm('./build', { recursive: true });
    await fs.mkdir('./build');
    const collections = dbRules.collections;
    const rules = dbRules.rules;
    const dbData = db;
    for (let collection of collections) {
        const data = dbData[collection];
        const dataKey = rules[collection].key;
        const dataPath = `./build/${collection}.json`;
        await fs.writeFile(dataPath, JSON.stringify(data));
        console.log(`Data written to ${dataPath}`);
        await fs.mkdir(`./build/${collection}`);
        for (let item of data) {
            const itemPath = `./build/${collection}/${item[dataKey]}.json`;
            await fs.writeFile(itemPath, JSON.stringify(item));
            console.log(`Data written to ${itemPath}`);
        }
    }
};

build();
