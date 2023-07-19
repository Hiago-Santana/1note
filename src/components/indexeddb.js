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

  const resultArray = Array.isArray(description)
  console.log("resultArray",resultArray)
  console.log("testeArray",description[0].checkBox)  
  const db = await openDataBase();

  if(resultArray){
    
    // db.add("note", {title: title, description: description[0].description});
    db.add("note", {title: title, description: {list: description[0].description, checkBox: description[0].checkBox}});
    const allNote = await db.getAll("note");
    const teste = allNote.slice(-1)[0]
    console.log("teste",teste.id)

    const size = description.length
    console.log("size",size)
  }
  
    
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