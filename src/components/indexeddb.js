import { openDB, deleteDB, wrap, unwrap } from "idb";

function openDataBase() {
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
  const display = false;
  const dateNow = new Date();
  const idValue = dateNow.getTime();
  //const returndate = new Date(id2);
  const db = await openDataBase();
  db.add("note", {title, description, display});
  
  const store = db.transaction('note').store;
  const cursor = await store.openCursor();
}

export async function readAllNote() {
  const db = await openDataBase();
  const allNote = await db.getAll("note");
  //console.log(allNote);
  return allNote;
}

export async function deleteNote(id) {
  const db = await openDataBase();
  db.delete("note", id);
  //transaction.objectStore("note").delete(id);
}

export async function setNote(id1,title1,description1) {
  const display1 = false;
  console.log("setnote", id1,title1,description1);
  const db = await openDataBase();
  await db.put("note", {title: title1, description: description1, display: display1}, id1)
  //db.put('note', {title: title}, id);
  console.log("Execution setNote")
}