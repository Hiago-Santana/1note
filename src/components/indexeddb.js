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
          // If it isn't explicitly set, create a value by auto incrementing.
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
  const db = await openDataBase();

  if(resultArray){
    db.add("note", {title: title});
    const allNote = await db.getAll("note");
    const note = allNote.slice(-1)[0]
    const dbList = await openDataBaseList();
    const size = description.length
    for(let i = 0;i < size;i++){
      const checkBoxList = description[i].checkBox;
      const descriptionList = description[i].description
      console.log("checkBox",checkBoxList)
      console.log("descriptionList",descriptionList)
      dbList.add("noteList",{idNote: note.id, checkBox: checkBoxList, description: descriptionList})
    }
  }else{
    db.add("note", {title: title, description: description});
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

export function openDataBaseList() {
  return new Promise((resolve, reject) => {
    const db = openDB("noteListDB", 1, {
      upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore("noteList"
        , {
          // The 'id' property of the object will be the key.
          keyPath: "id",
          // If it isn't explicitly set, create a value by auto incrementing.
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