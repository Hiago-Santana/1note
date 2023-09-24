// // api url
// // const api_url =	"https://frosty-recipe-fd6f.hiago-douglas.workers.dev";
// const api_url =	"http://127.0.0.1:8787";
import { readCloundDataBase } from './indexeddb'

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

 export async function createAcount(type, cAName,cAEmail,cAPassword) {
  
  try {const data = {"type": type,"cAName": cAName, "cAEmail":cAEmail,"cAPassword":cAPassword}
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
  try {const data = {"type": "logIn","logEmail":logEmail,"logPassword":logPassword}
  const response = await fetch("http://127.0.0.1:8787/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  result = await response.json();
  console.log("Success:", result.userAuthentication.authentication);
} catch (error) {
  console.error("Error:", error);
}
//console.log("data",data)

if(result.userAuthentication.authentication === true){
  
  console.log("Success:", result.authentication);
  readCloundDataBase(result)

  return result

  

}

}

