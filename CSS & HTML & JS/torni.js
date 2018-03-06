document.addEventListener("DOMContentLoaded", function () {

	let elements = document.querySelectorAll(".container .menu ul li a");

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
	}

	//const allnotes = document.getElementById("allnotes");
	//	allnotes.addEventListener("click", function(){
	//	})

});

//document.addEventListener("DOMContenLoaded")

/*const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url)
	.then(function (response) {
	jsObj = JSON.parse(url);
	
		return jsObj;
	});
*/

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
	
	//let parent = document.getElementById('allnotes').parentElement.parentElement;
	//document.getElementsByClassName('hm').innerHTML.value = "All notes";
	//console.log(parent);
}
