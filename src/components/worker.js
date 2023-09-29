// // api url
// // const api_url =	"https://frosty-recipe-fd6f.hiago-douglas.workers.dev";
// const api_url =	"http://127.0.0.1:8787";
import { readCloundDataBase, addNote, setNote } from "./indexeddb";

export async function getapi() {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "13");

  const myInit = {
    Method: "GET",
    headers: myHeaders,
  };

  const teste = fetch("http://127.0.0.1:8787/", myInit)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log(error);
    });
}

export async function createAcount(type, cAName, cAEmail, cAPassword) {
  try {
    const data = {
      type: type,
      cAName: cAName,
      cAEmail: cAEmail,
      cAPassword: cAPassword,
    };
    const response = await fetch("http://127.0.0.1:8787/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  //console.log("data",data)
}

export async function logInCount(logEmail, logPassword) {
  let result = null;
  try {
    const data = {
      type: "logIn",
      logEmail: logEmail,
      logPassword: logPassword,
    };
    const response = await fetch("http://127.0.0.1:8787/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  //console.log("data",data)

  if (result.userAuthentication.authentication === true) {
    const id = result.userAuthentication.id;
    //console.log("Success:", result.authentication);
    //readCloundDataBase(result);
    // const token = jwt.sign({id},process.env.SECRET, {expireIn: 300})
    // console.log("token", token)

    return result;
  }
}

export async function insertNote(title, description, token, id) {
  let result = null;
  let noteinsert;

  try {
    const data = {
      type: "insertNote",
      title: title,
      description: description,
      token: token,
    };
    const response = await fetch("http://127.0.0.1:8787/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    console.log("Success:", result);

    if (result.res.noteinsert === true) {
    


  }else{
    console.log("Note dont inserted")
  }
  } catch (error) {
    console.error("Error:", error);

    const noteId =null;
    const usersId = id;
    const title = title;
    const description = description;
    const lastUpdate = new Date();
    const deleted = null;

    addNote(noteId, usersId, title, description, lastUpdate, deleted)

  }

  //excluir após testes
  // const noteId =null;
  //   const usersId = id;
  //   const lastUpdate = new Date();
  //   const deleted = null;

  //   addNote(noteId, usersId, title, description, lastUpdate, deleted)

 
}


export async function deleteNoteClound(id, noteId, usersId, title, description, lastUpdate, token) {
  let result = null;
  let noteinsert;
  console.log("deleteNoteClound",noteId)

  try {
    const data = {
      type: "deleteNote",
      noteId: noteId,
      token: token,
    };
    const response = await fetch("http://127.0.0.1:8787/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

  if (result.res.noteDeleted === true) {
    const dateDeleted = result.res.lastNote.results[0].deleted;
    console.log("dateDeleted", dateDeleted)

    //addNote(noteId, usersId, title, description, lastUpdate, deleted)
    setNote(id, noteId, usersId, title, description, lastUpdate, dateDeleted)

  }else{
    console.log("Note dont deleted")
  }
}

export async function setNoteClound(id, noteId, usersId, title, description, lastUpdate, deleted, token) {
  let result = null;
  let noteinsert;
  console.log("description Set Note", description)
  console.log("deleteNoteClound",noteId)

  try {
    const data = {
      type: "setNote",
      noteId: noteId, 
      title: title,
      description: description,
      deleted: deleted,      
      token: token,
    };
    const response = await fetch("http://127.0.0.1:8787/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

  if (result.res.noteChanged === "deleted" || result.res.noteChanged === "update") {
    const dateDeleted = result.res.lastNote.results[0].deleted;
    const update = result.res.lastNote.results[0].lastUpdate;
    console.log("dateDeleted", dateDeleted)

    //addNote(noteId, usersId, title, description, lastUpdate, deleted)
    setNote(id, noteId, usersId, title, description, update, dateDeleted)

  }else{
    console.log("Note dont deleted")
  }
}
