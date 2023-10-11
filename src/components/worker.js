//const api_url =	"https://frosty-recipe-fd6f.hiago-douglas.workers.dev";
const api_url = "http://127.0.0.1:8787/";
//const api_url =	"https://worker1note.hiago-douglas.workers.dev"

export async function createAcount(type, cAName, cAEmail, cAPassword) {
  try {
    const data = {
      type: type,
      cAName: cAName,
      cAEmail: cAEmail,
      cAPassword: cAPassword,
    };
    const response = await fetch(api_url, {
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
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    if (result.userAuthentication.authentication === true) {
      const id = result.userAuthentication.id;
      return result;
    }
    //console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  //console.log("data",data)
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
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    //console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function setNoteClound(
  id,
  noteId,
  usersId,
  title,
  description,
  deleted,
  token
) {
  let result = null;
  try {
    const data = {
      type: "setNote",
      noteId: noteId,
      title: title,
      description: description,
      deleted: deleted,
      token: token,
    };
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await response.json();
    //console.log("Success:", result);
    return result;
  } catch (error) {
    console.log("Error:", error);
  }
}
