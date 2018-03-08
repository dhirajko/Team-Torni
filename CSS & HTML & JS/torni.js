document.addEventListener("DOMContentLoaded", function () {

	fetch("https://jsonplaceholder.typicode.com/photos")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			let ul = document.createElement('ul');

			for (i = 0; i < 302; i++) {
				let li = document.createElement('li');
				let aid = document.createElement('class');

				aid.name = 'aid';

				aid.id = myJson[i].id;

				let id = aid.id;

				aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

				li.appendChild(aid);
				ul.appendChild(li);


			}

			//LOADS INFO ABOUT NOTE WHEN CLICKED
			document.getElementById("list").addEventListener("click", function clickNote(noteid) {


				document.getElementById('infotitle').innerHTML = myJson[event.target.id - 1].title;
				document.getElementById('infoid').innerHTML = "ID: " + myJson[event.target.id - 1].albumId;
				document.getElementById('informant').innerHTML = "Informant: " + myJson[event.target.id - 1].url;
				document.getElementById('timestamp').innerHTML = "Timestamp: " + myJson[event.target.id - 1].id;
				document.getElementById('description').innerHTML = "Description: " + myJson[event.target.id - 1].thumbnailUrl;


			})
			document.getElementById('list').appendChild(ul);





		})






	/*let elements = document.querySelectorAll(".container .menu ul li a");

	for (let a of elements) {

		a.addEventListener("click", function (event) {
			event.preventDefault();

			for (let a of elements) {
				let target = a.parentElement.dataset.targetSection;
				document.querySelector(target).classList.add("hidden");
			}

			let target = event.target.parentElement.dataset.targetSection;

			document.querySelector(target).classList.remove("hidden");
		})
	}*/


});

//Checks if user wants to close the note
function noteFinished() {
	let txt;
	let r = confirm("Are you sure the task is finished?");
	if (r == true) {
		txt = "You closed the note";
	} else {
		txt = "You pressed Cancel";
	}
	document.getElementById("closing").innerHTML = txt;
}

//This function changes whos notes are showing
function showNotes(group) {

	let change = document.getElementById(group).id;
	console.log(change);

	document.getElementById('notesGroup').innerHTML = document.getElementById(change).innerHTML;

	/*
		if(this.readyState == 4 && this.status == 200){
			let myObj = JSON.parse(this.responseText);
			document.getElementById('time').innerHTML = myObj.title;
		}
	};
	
	xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
	xmlhttp.send();
*/

	//for(let i = 0; i<10; i++){

	//	let li = document.createElement('li');

	//	li.innerHTML = myJson[i].title;
	//	console.log(myJson[i].title);
	//}

	//document.getElementsByClassName('list').innerHTML = myJson.userId;
	//console.log(document.getElementsByClassName('list').innerHTML);

	//}
	//fetchNotes(change);
}
