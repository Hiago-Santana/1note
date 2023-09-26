import { openDB, deleteDB, wrap, unwrap } from "idb";
import Index from 'flexsearch';

const index = new Index({ tokenize: "full" });

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

// export async function addNote(title, description) {
//   const db = await openDataBase(); 
//   db.add("note", {title: title, description: description});
//   const store = db.transaction('note').store;
//   const cursor = await store.openCursor();
// }

export async function addNote(noteId, usersId, title, description, lastUpdate, deleted) {
  const db = await openDataBase(); 
  db.add("note", {noteId:noteId, usersId:usersId, title: title, description: description, lastUpdate:lastUpdate, deleted:deleted});
  const store = db.transaction('note').store;
  const cursor = await store.openCursor();
}

export async function readAllNote() {
  // let allNote = [];
  const db = await openDataBase();
  const allNote = await db.getAll("note");
  const deleted = !null
  
  // const size = allNote.length
  // for(let i = 0; i < size; i++){
  //   const search = allNote.find(Element => Element.deleted == null).id
  //   const allNote = null;
  //   allNote.value.push({})

  // }

  
console.log("TEste addNote",teste)
  return allNote;
}


// export async function deleteNote(id) {
//   const db = await openDataBase();
//   db.delete("note", id);
// }

export async function deleteNote(id) {
    const db = await openDataBase();
    db.delete("note", id);
  }

// export async function setNote(id,title,description) {
//   const db = await openDataBase();
//   await db.put("note",{id: id, title: title, description: description})  
// }

export async function setNote(id, noteId, usersId, title, description, lastUpdate, deleted) {
  const db = await openDataBase();
  if(deleted == null){
     await db.put("note",{id: id, noteId:noteId, usersId:usersId, title: title, description: description, lastUpdate:lastUpdate, deleted:null})  
}else{

  await db.put("note",{id: id, noteId:noteId, usersId:usersId, title: title, description: description, lastUpdate:lastUpdate, deleted:deleted})
}
  }
 


const date = () => {
  // const dateNowUTC = new Date(Date.now());
  // const dateNow = new Date(dateNowUTC)
  const dateNow = new Date()
  const dateZero = dateNow.toLocaleDateString({
    year: "numeric",
    month: "2-digit",
    day: "2-didit",
  })
  const mm = dateNow.getMonth()+1;
  const dd = dateNow.getDate();
  const yyyy = dateNow.getFullYear();

  const h = dateNow.getUTCHours();
  const m = dateNow.getUTCMinutes();
  const s = dateNow.getUTCSeconds();

  const dateFormated = yyyy + "-" + mm + "-" + dd + " " + h + "-" + m + "-" + s
  console.log("DateNow",dateFormated)
  console.log("dateZero",dateZero)

// var date = new Date();
// var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
//                 date.getUTCDate(), date.getUTCHours(),
//                 date.getUTCMinutes(), date.getUTCSeconds());

// const dateUTC = new Date(now_utc)

// const mm = dateUTC.getMonth()+1;
//   const dd = dateUTC.getDate();
//   const yyyy = dateUTC.getFullYear();

//   const h = dateUTC.getHours();
//   const m = dateUTC.getMinutes();
//   const s = dateUTC.getSeconds();

//   const dateFormated = yyyy + "-" + mm + "-" + dd + " " + h + "-" + m + "-" + s

//   console.log("DateNow",dateFormated)
// console.log("dateUTC", dateUTC)
// console.log(new Date(now_utc));
// console.log(date.toISOString());

}

export async function readCloundDataBase (result) {

  const id = result.userAuthentication.idUser
  const allNote = await readAllNote()

  // for (let i = 0; i < size ++) {
  //   const noteUser = allNote.value.find(Element => Element.id == id).title

  // }





//console.log("allNote",allNote)
}
