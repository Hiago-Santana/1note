// // api url
// // const api_url =	"https://frosty-recipe-fd6f.hiago-douglas.workers.dev";
// const api_url =	"http://127.0.0.1:8787";

export async function getapi() {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "11");

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

// export async function createAcount(cAName,cAEmail,cAPassword) {

//    console.log("cAName",cAName)
//    console.log("cAEmail",cAEmail)
//    console.log("cAPassword",cAPassword)

//    const myHeaders = new Headers();
//    //myHeaders.append("Accept", "11");
 
//    const myInit = {
//      Method: "POST",
//      //headers: myHeaders,
//      BODY: ""
//    };
 
//    const teste = fetch("http://127.0.0.1:8787/", myInit)
//      .then((response) => response.json())
//      .then((json) => console.log(json))
//      .catch((error) => {
//        console.log(error);
//      });
   
//  }

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
    