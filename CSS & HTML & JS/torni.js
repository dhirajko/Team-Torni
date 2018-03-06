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
	
	
	function fetchNotes(change){
		fetch("https://jsonplaceholder.typicode.com/todos")
		.then(response => response.blob())
		.then(function(myBlob){
			change.href = "bdfbsd";
			console.log(change.href);
		});
	}
}

