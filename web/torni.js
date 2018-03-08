document.addEventListener("DOMContentLoaded", function () {

		fetch("https://jsonplaceholder.typicode.com/albums")
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				let ul = document.createElement('ul');

				for (i = 0; i < 15; i++) {
					let li = document.createElement('li');
					let aid = document.createElement('id');

					aid.id = 'aid';

					aid.innerHTML = myJson[i].userId + "|" + myJson[i].title + "|" + myJson[i].id;

					li.appendChild(aid);
					ul.appendChild(li);
					console.log(li);
				}
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
}
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

