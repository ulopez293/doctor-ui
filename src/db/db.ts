import { openDB } from 'idb';

export const getDB = async () => {
    return await openDB('appointments-db', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('appointments')) {
                db.createObjectStore('appointments', { keyPath: 'id' })
            }
        },
    })
}
