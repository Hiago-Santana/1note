import { openDB, deleteDB, wrap, unwrap } from "idb";

export function openDataBase() {
  return new Promise((resolve, reject) => {
    const db = openDB("noteDB", 1, {
      upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore("note"
        , {
          // The 'id' property of the object will be the key.
          keyPath: "id",
        //   // If it isn't explicitly set, create a value by auto incrementing.
          autoIncrement: true
        }
        );
        // Create an index on the 'note' property of the objects.
        store.createIndex("strengthIndex", "strength");
      },
    });
    resolve(db);
  });
}

export async function addNote(title, description) {
  const db = await openDataBase();
  db.add("note", {title, description});  
  const store = db.transaction('note').store;
  const cursor = await store.openCursor();
}

export async function readAllNote() {
  const db = await openDataBase();
  const allNote = await db.getAll("note");
  return allNote;
}

export async function deleteNote(id) {
  const db = await openDataBase();
  db.delete("note", id);
}

export async function setNote(id,title,description) {
  const db = await openDataBase();
  await db.put("note",{id: id, title: title, description: description})  
}