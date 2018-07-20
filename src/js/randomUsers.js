const url = 'https://randomuser.me/api'; // api de usuarios random, da usuarios al azar

fetch(url)
.then(response => response.json())
//console.log(response);
.then(json => {
	document.getElementById("users")
	showUser = document.getElementById("usersShow");
	let person = json.results[0]; // obtengo la primera llave
	//console.log(person);
	 // mostrar en el html nombre, apellido y email
	showUser.innerHTML += "<img src="+person.picture.large+"><br>" 
	showUser.innerHTML += person.name.first +" ";
	showUser.innerHTML += person.name.last + "<br>" ;	
	showUser.innerHTML += person.email +"<br>";
	
});	
fetch(url)
.then(response => response.json())
.then(json => {
	document.getElementById("users2")
	showUser = document.getElementById("usersShow2");
	let person = json.results[0];
	
	showUser.innerHTML += "<img src="+person.picture.large+"><br>"
	showUser.innerHTML += person.name.first +" ";
	showUser.innerHTML += person.name.last + "<br>" ;	
	showUser.innerHTML += person.email +"<br>";
	
});	
fetch(url)
.then(response => response.json())
.then(json => {
	document.getElementById("users3")
	showUser = document.getElementById("usersShow3");
	let person = json.results[0];

	showUser.innerHTML += "<img src="+person.picture.large+"><br>"
	showUser.innerHTML += person.name.first +" ";
	showUser.innerHTML += person.name.last + "<br>" ;	
	showUser.innerHTML += person.email +"<br>";
	
});	

fetch(url)
.then(response=>response.json())
.then(json=>{
	document.getElementById("users4")
	showUser = document.getElementById("usersShow4");
	let person = json.results[0];
	showUser.innerHTML += "<img src="+person.picture.large+"><br>"
	showUser.innerHTML += person.name.first +" ";
	showUser.innerHTML += person.name.last + "<br>" ;	
	showUser.innerHTML += person.email +"<br>";
});	

fetch(url)
.then(response=>response.json())
.then(json=>{
	document.getElementById("users5")
	showUser = document.getElementById("usersShow5");
	let person = json.results[0];
	showUser.innerHTML += "<img src="+person.picture.large+"><br>"
	showUser.innerHTML += person.name.first +" ";
	showUser.innerHTML += person.name.last + "<br>" ;	
	showUser.innerHTML += person.email +"<br>";
});	


