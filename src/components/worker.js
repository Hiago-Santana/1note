// // api url
// // const api_url =	"https://frosty-recipe-fd6f.hiago-douglas.workers.dev";
// const api_url =	"http://127.0.0.1:8787";

// // Defining async function
// export async function getapi(url) {

// 	// Storing response
// 	const response = await fetch(url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// export function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// export function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }



 export async function getapi() {

    const myHeaders = new Headers();
    myHeaders.append("Accept","11")

   const myInit = {
      Method: "GET",
      headers: myHeaders
   }
   
    const teste = fetch('http://127.0.0.1:8787/', myInit)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => { console.log(error)
    });
    

 }

// var invocation = new XMLHttpRequest();
// var url = "https://frosty-recipe-fd6f.hiago-douglas.workers.dev";

// export function callOtherDomain() {
//   if (invocation) {
//     invocation.open("GET", url, true);
//     invocation.onreadystatechange = handler;
//     invocation.send();
//   }
// }
